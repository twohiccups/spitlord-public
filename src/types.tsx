export interface NavLink {
    href: string;
    label: string;
}
  
export interface NavbarProps {
    links: NavLink[];
}

export interface AnnouncementProps {
    text: string;
}