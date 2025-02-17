"use client"; // Required for client-side behavior in App Router

import Link from "next/link";
import styles from "@styles/Navbar.module.css";

export interface NavLink {
  href: string;
  label: string;
}

interface CircularNavigationProps {
  links: NavLink[];
  radius?: number; // Optional: distance from the center
}

export default function Navbar({
  links,
  radius = 120, // Default radius (adjust as needed)
}: CircularNavigationProps) {
  const count = links.length;

  return (
    <div className={styles.circle}>
      {links.map((link, index) => {
        // Calculate the angle for this link (in degrees)
        const angle = (360 / count) * index;
        // Create a transform that rotates the link, pushes it out, and rotates it back so the text stays upright
        const transformStyle = `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;

        return (
          <Link key={link.href} href={link.href} className={styles.link} style={{ transform: transformStyle }}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
