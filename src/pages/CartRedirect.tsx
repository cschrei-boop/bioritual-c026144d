import { useEffect } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";

// Query to get product by variant ID
const PRODUCT_BY_VARIANT_QUERY = `
  query GetProductByVariant($id: ID!) {
    node(id: $id) {
      ... on ProductVariant {
        id
        title
        price {
          amount
          currencyCode
        }
        availableForSale
        selectedOptions {
          name
          value
        }
        product {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const CartRedirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { variantInfo } = useParams<{ variantInfo?: string }>();
  const addItem = useCartStore(state => state.addItem);
  
  useEffect(() => {
    const handleCartRedirect = async () => {
      // Store discount code if present
      const discount = searchParams.get("discount");
      if (discount) {
        sessionStorage.setItem("shopify_discount", discount);
      }
      
      // Parse variant info if present (format: VARIANT_ID:QUANTITY)
      // e.g., /cart/10137374556443:1?discount=COACH
      if (variantInfo) {
        const [variantNumericId, quantityStr] = variantInfo.split(':');
        const quantity = parseInt(quantityStr, 10) || 1;
        
        if (variantNumericId) {
          // Convert numeric ID to Shopify GraphQL ID format
          const variantGid = `gid://shopify/ProductVariant/${variantNumericId}`;
          
          try {
            // Fetch the variant and its product data
            const data = await storefrontApiRequest(PRODUCT_BY_VARIANT_QUERY, { id: variantGid });
            const variant = data?.data?.node;
            
            if (variant?.product) {
              // Format product to match ShopifyProduct structure
              const product = {
                node: {
                  id: variant.product.id,
                  title: variant.product.title,
                  description: variant.product.description,
                  handle: variant.product.handle,
                  priceRange: variant.product.priceRange,
                  images: variant.product.images,
                  variants: variant.product.variants,
                  options: variant.product.options,
                }
              };
              
              // Add item to cart
              await addItem({
                product,
                variantId: variant.id,
                variantTitle: variant.title,
                price: variant.price,
                quantity,
                selectedOptions: variant.selectedOptions || [],
              });
            }
          } catch (error) {
            console.error('Failed to add item from cart link:', error);
          }
        }
      }
      
      // Always set auto-open flag for any /cart link
      sessionStorage.setItem("auto_open_cart", "true");
      
      // Redirect to home - the cart drawer will auto-open
      navigate("/", { replace: true });
    };
    
    handleCartRedirect();
  }, [navigate, searchParams, variantInfo, addItem]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Adding to cart...</p>
    </div>
  );
};

export default CartRedirect;
