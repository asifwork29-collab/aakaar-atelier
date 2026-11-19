import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeroSection({ onOpenEnquiry }) {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[680px] w-full items-end overflow-hidden bg-[#292823]"
    >
      {/* Hero Background Image */}
      <img
        src="/aakaar-hero.webp"
        alt="Contemporary Indian luxury living room with arches, natural wood and warm sunlight"
        className={`absolute inset-0 h-full w-full object-cover object-[43%_center] md:object-center transition-transform duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          heroLoaded ? "scale-100" : "scale-[1.03]"
        }`}
      />

      {/* Editorial Gradient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,27,23,0.35)_0%,rgba(28,27,23,0.12)_35%,rgba(25,24,20,0.82)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(25,24,20,0.32)_0%,rgba(25,24,20,0.08)_65%,transparent_100%)] md:bg-[linear-gradient(90deg,rgba(25,24,20,0.22)_0%,transparent_75%)]"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-10 px-6 pb-14 sm:px-10 sm:pb-20 lg:flex-row lg:items-end lg:px-16 lg:pb-24">
        <div className="max-w-2xl text-[#F5F1E9]">
          <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.28em] text-[#D9D0C2] sm:mb-6">
            KOLKATA &nbsp;&bull;&nbsp; EST. 2016
          </p>

          <h1 className="mb-6 font-serif text-5xl font-light leading-[1.03] tracking-[-0.01em] sm:mb-8 sm:text-6xl md:text-7xl lg:text-[92px]">
            Quiet luxury.
            <br />
            <span className="font-light italic text-[#F5F1E9]/95">
              Indian soul.
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-sm font-light leading-relaxed text-[#F5F1E9]/95 sm:mb-10 sm:text-base">
            Thoughtfully designed spaces that reflect your story, your lifestyle
            and the timeless beauty of Indian living.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="group inline-flex min-h-12 items-center justify-center gap-4 border border-[#A58B6B] bg-[#A58B6B] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F5F1E9] transition-colors duration-500 hover:border-[#F5F1E9] hover:bg-[#F5F1E9] hover:text-[#292823] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F1E9] cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4 shrink-0 stroke-[1.25] transition-transform duration-500 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center gap-3 border-b border-[#F5F1E9]/60 text-[11px] uppercase tracking-[0.2em] text-[#F5F1E9] transition-colors duration-500 hover:border-[#A58B6B]"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="h-4 w-4 shrink-0 stroke-[1.25] text-[#A58B6B] transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden flex-col items-center space-y-3 self-end text-[#F5F1E9]/75 sm:flex">
          <span className="rotate-180 text-[10px] uppercase tracking-[0.28em] [writing-mode:vertical-rl]">
            Scroll
          </span>

          <div className="relative h-14 w-px overflow-hidden bg-[#F5F1E9]/25">
            <div className="h-full w-full bg-[#F5F1E9] motion-safe:animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
