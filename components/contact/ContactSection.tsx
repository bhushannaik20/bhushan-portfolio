import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Contact
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          I&apos;m always open to conversations around consulting, strategy,
          innovation, sustainability and technology.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-navy" strokeWidth={1.75} />
              <Link
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm font-medium text-text-primary hover:text-navy"
              >
                {SITE_CONFIG.email}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-navy" strokeWidth={1.75} />
              <Link
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="text-sm font-medium text-text-primary hover:text-navy"
              >
                {SITE_CONFIG.phone}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <ExternalLink className="h-5 w-5 text-navy" strokeWidth={1.75} />
              <Link
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-primary hover:text-navy"
              >
                LinkedIn Profile
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-navy" strokeWidth={1.75} />
              <span className="text-sm font-medium text-text-primary">
                Mumbai, India
              </span>
            </div>

            <Link
              href="/resume/bhushan-naik-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-surface"
            >
              Download Resume
            </Link>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}