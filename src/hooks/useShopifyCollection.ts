import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, PROTOCOL_PRODUCTS_QUERY, PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";

export interface CollectionProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: string | null;
  price: string;
  currencyCode: string;
}

async function fetchProtocolProducts(): Promise<CollectionProduct[]> {
  const data = await storefrontApiRequest(PROTOCOL_PRODUCTS_QUERY, { first: 50 });
  
  const products = data?.data?.protocols?.edges || [];
  
  return products.map((edge: { node: ShopifyProduct["node"] }) => {
    const product = edge.node;
    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description || "",
      image: product.images?.edges?.[0]?.node?.url || null,
      price: product.priceRange?.minVariantPrice?.amount || "0",
      currencyCode: product.priceRange?.minVariantPrice?.currencyCode || "USD",
    };
  });
}

async function fetchAllProducts(query?: string): Promise<CollectionProduct[]> {
  const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 50, query });
  
  const products = data?.data?.products?.edges || [];
  
  return products.map((edge: { node: ShopifyProduct["node"] }) => {
    const product = edge.node;
    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description || "",
      image: product.images?.edges?.[0]?.node?.url || null,
      price: product.priceRange?.minVariantPrice?.amount || "0",
      currencyCode: product.priceRange?.minVariantPrice?.currencyCode || "USD",
    };
  });
}

export function useProtocolProducts() {
  return useQuery({
    queryKey: ['shopify-protocols'],
    queryFn: fetchProtocolProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });
}

export function useAllProducts(query?: string) {
  return useQuery({
    queryKey: ['shopify-products', query],
    queryFn: () => fetchAllProducts(query),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });
}
