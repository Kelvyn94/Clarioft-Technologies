"use client";

import { useState } from "react";
import Link from "next/link";
import Brand from "@/components/Brand";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Our approach", href: "/#approach" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Brand />

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
