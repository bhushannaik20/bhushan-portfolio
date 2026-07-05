"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // NOTE: no backend wired yet — this just simulates submission.
    // We'll connect a real email service (e.g. Resend/Formspree) in a later phase.
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-text-primary">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
        </div>
        <div>
          <label htmlFor="organization" className="text-sm font-medium text-text-primary">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-text-primary">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light disabled:opacity-60"
      >
        {status === "idle" && "Send Message"}
        {status === "submitting" && "Sending..."}
        {status === "sent" && "Message Sent"}
      </button>
    </form>
  );
}