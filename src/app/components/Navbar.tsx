"use client";

import Link from "next/link";
import styles from "@styles/Navbar.module.css";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];
  const count = links.length;

  return (
    <div className={styles.wrapper}>
      {/* Circle background with overflow hidden */}
      <div className={styles.circleBackground} />

      {/* Links container on *top* of the circle */}
      <div className={styles.links}>
        {links.map((link, index) => {
          const angle = (360 / count) * index;
          const transformStyle = `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translate(var(--radius))
            rotate(-${angle}deg)
          `;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              style={{ transform: transformStyle }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
