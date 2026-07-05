import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="font-serif text-lg font-medium text-navy">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {SITE_CONFIG.title} · {SITE_CONFIG.subtitle}
            </p>
            <p className="mt-1 text-sm text-text-muted">Mumbai, India</p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-navy hover:text-navy-light"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
            </Link>
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Send email"
              className="text-navy hover:text-navy-light"
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}