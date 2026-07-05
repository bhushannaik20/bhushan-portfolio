"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isScrolled = useScrollPosition(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-colors duration-300",
        isScrolled ? "bg-white border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 lg:px-10">
        {/* Left: Monogram + Name */}
        <Link href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-serif text-sm font-semibold text-white">
            {SITE_CONFIG.monogram}
          </span>
          <span className="font-serif text-lg font-medium text-navy">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Right: Desktop Nav Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-text-primary"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-navy transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-navy" strokeWidth={1.75} />
          ) : (
            <Menu className="h-6 w-6 text-navy" strokeWidth={1.75} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-medium text-text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}