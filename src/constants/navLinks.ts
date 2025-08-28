import type { NavLink } from "@/types/navLink";
import { Store, ShoppingCart } from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  {
    id: "tienda",
    name: "Tienda",
    url: "https://transquim.com",
    icon: Store,
    size: 30,
  },
  {
    id: "productos",
    name: "Productos",
    url: "https://transquim.com/collections/all",
    icon: ShoppingCart,
    size: 30,
  },
];
