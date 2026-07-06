import Image from "next/image";

export function StartupRecognitionCard() {
  return (
    <div className="mt-12 rounded-2xl border border-border bg-white p-8 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy">
        Startup Recognition
      </p>
      <h3 className="mt-3 font-serif text-2xl font-bold text-navy">
        SafeWay Innovations LLP
      </h3>
      <p className="mt-1 text-sm font-semibold text-text-muted">
        Pre-Incubated Startup
      </p>
      <p className="mt-1 text-sm text-text-muted">
        AIC-NIFIE, Indian Institute of Management Mumbai
      </p>
      <p className="mt-4 max-w-[700px] text-sm leading-relaxed text-text-muted">
        SafeWay Innovations LLP is pre-incubated under AIC-NIFIE, Indian
        Institute of Management Mumbai, supporting the development of
        technology-led innovations across sustainability, mobility, renewable
        energy and public sector transformation.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-8 border-t border-border pt-6">
        <div className="relative h-10 w-28">
          <Image
            src="/images/logos/safeway.png"
            alt="SafeWay Innovations LLP"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="relative h-10 w-28">
          <Image
            src="/images/logos/iim-mumbai.png"
            alt="IIM Mumbai"
            fill
            className="object-contain object-left"
          />
        </div>
      </div>
    </div>
  );
}