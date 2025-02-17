"use client";

import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import { NavbarProps } from "src/types";

export default function Navbar({links} : NavbarProps) {

  return (
    <div className={styles.wrapper}>
      {/* Circle background with overflow hidden */}
      <div className={styles.circleBackground} />

      {/* Links container now a flex-column */}
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
