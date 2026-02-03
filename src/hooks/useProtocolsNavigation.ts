import { useProtocolProducts } from "./useShopifyCollection";

export interface ProtocolNavItem {
  label: string;
  href: string;
}

export function useProtocolsNavigation() {
  const { data: products = [], isLoading } = useProtocolProducts();

  // Transform products into navigation items
  const protocols: ProtocolNavItem[] = [
    { label: "View All Protocols", href: "/collection/protocols" },
    ...products.map(product => ({
      label: product.title.replace("Bio Signals: ", ""),
      href: `/products/${product.handle}`,
    })),
  ];

  return { protocols, isLoading };
}
