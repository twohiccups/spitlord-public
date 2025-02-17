export interface NavLink {
    href: string;
    label: string;
}
  
export interface CircularNavigationProps {
    links: NavLink[];
    radius?: number; // Optional: distance from the center
}