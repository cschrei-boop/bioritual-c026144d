import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CartRedirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    // Store discount code if present
    const discount = searchParams.get("discount");
    if (discount) {
      sessionStorage.setItem("shopify_discount", discount);
    }
    
    // Always set auto-open flag for any /cart link
    sessionStorage.setItem("auto_open_cart", "true");
    
    // Redirect to home - the cart drawer will auto-open
    navigate("/", { replace: true });
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to cart...</p>
    </div>
  );
};

export default CartRedirect;
