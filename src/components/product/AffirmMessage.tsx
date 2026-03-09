interface AffirmMessageProps {
  price: number;
  className?: string;
}

/**
 * Displays Affirm installment messaging below a product price.
 * Shows "or 4 interest-free payments of $X with Affirm".
 */
export const AffirmMessage = ({ price, className = "" }: AffirmMessageProps) => {
  if (!price || price <= 0) return null;

  const installment = (price / 4).toFixed(0);

  return (
    <p className={`text-sm text-foreground/60 ${className}`}>
      or 4 interest-free payments of <span className="font-medium text-foreground/80">${installment}</span> with{" "}
      <span className="font-semibold tracking-wide">Affirm</span>
    </p>
  );
};
