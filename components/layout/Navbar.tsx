"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isScrolled = useScrollPosition(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] h-16 transition-colors duration-300 sm:h-20",
        isScrolled || isMobileMenuOpen
          ? "border-b border-border bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="relative z-[110] mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link
          href="/#home"
          className="flex items-center gap-2.5 sm:gap-3"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-serif text-xs font-semibold text-white sm:h-9 sm:w-9 sm:text-sm">
            {SITE_CONFIG.monogram}
          </span>
          <span className="font-serif text-base font-medium text-navy sm:text-lg">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-text-primary"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-[120] flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Menu
            className={cn(
              "absolute h-6 w-6 text-navy transition-all duration-300",
              isMobileMenuOpen
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            )}
            strokeWidth={1.75}
          />
          <X
            className={cn(
              "absolute h-6 w-6 text-navy transition-all duration-300",
              isMobileMenuOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            )}
            strokeWidth={1.75}
          />
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-16 z-[105] overflow-y-auto bg-white transition-all duration-300 sm:top-20 lg:hidden",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-6 sm:px-6">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.href}
              className="transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              <Link
                href={item.href}
                className="block border-b border-border py-4 text-base font-medium text-text-primary active:text-navy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}