import { LucideIcon } from "lucide-react";

export interface NavLink {
    id: string;
    name: string;
    url: string;
    icon: LucideIcon;
    size: number;
}