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

export interface GalleryImage {
  imgSrc: string;       // URL for the full-size image
  imgAlt: string;       // Alt text for the full-size image
  thumbnailSrc: string; // URL for the thumbnail (can be same as full-size if needed)
  thumbnailAlt: string; // Alt text for the thumbnail
}

export interface GalleryProps {
  images: GalleryImage[];
}