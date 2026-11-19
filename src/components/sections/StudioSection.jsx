import { ArrowRight } from "lucide-react";
import { RevealBlock } from "../ui/RevealBlock";

export function StudioSection({ onOpenMonograph }) {
  return (
    <section
      id="studio"
      className="border-b border-[#292823]/15 bg-[#F5F1E9] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: Overlapping Architectural Photographs */}
          <RevealBlock className="relative pb-12 sm:pb-16 lg:col-span-6 lg:pb-20">
            <div className="aspect-[4/5] w-[86%] overflow-hidden bg-[#D9D0C2] sm:w-[82%]">
              <img
                src="/aakaar-studio.webp"
                alt="Warm architectural hallway with arches, handcrafted timber and natural stone"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 right-0 aspect-[4/4.6] w-[52%] overflow-hidden border-[6px] border-[#F5F1E9] bg-[#D9D0C2] shadow-sm sm:w-[46%] sm:border-[10px]">
              <img
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=85"
                alt="Warm contemporary interior with natural material details"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[#827C70]">
              Fig. 01 — Proportion, Daylight &amp; Materiality
            </p>
          </RevealBlock>

          {/* Right: Editorial Narrative */}
          <RevealBlock className="lg:col-span-5 lg:col-start-8">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.26em] text-[#A58B6B]">
              OUR STUDIO
            </p>

            <h2 className="mb-8 font-serif text-4xl font-light leading-[1.1] text-[#292823] sm:text-5xl lg:text-[54px]">
              Where design meets{" "}
              <span className="font-light italic">intention.</span>
            </h2>

            <p className="mb-6 text-base font-normal leading-[1.8] text-[#292823]/90 sm:text-[17px]">
              At Aakaar Atelier, we craft elegant, functional and enduring
              spaces. With a deep respect for aesthetics, craftsmanship and our
              clients, we design homes that feel personal, peaceful and
              timeless.
            </p>

            <p className="mb-10 text-sm font-light leading-[1.85] text-[#6F695F] sm:text-[15px]">
              Rooted in Kolkata's rich architectural lineage, our practice
              bridges quiet contemporary restraint with the tactile warmth of
              Indian materiality—seasoned Burma teak, hand-troweled lime
              plaster, honed Kota and travertine stone, and bespoke brass
              hardware forged by local master artisans.
            </p>

            {/* Studio Highlights */}

            {/* Studio Highlights */}
            <div className="mb-10 grid grid-cols-3 gap-4 border-y border-[#292823]/15 py-6 sm:gap-6">
              <div>
                <span className="block font-serif text-2xl text-[#292823] sm:text-3xl">
                  10+
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[#827C70] sm:text-[11px] sm:tracking-[0.14em]">
                  Years of Practice
                </span>
              </div>

              <div>
                <span className="block font-serif text-2xl text-[#292823] sm:text-3xl">
                  38
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[#827C70] sm:text-[11px] sm:tracking-[0.14em]">
                  Bespoke Homes
                </span>
              </div>

              <div>
                <span className="block font-serif text-2xl text-[#292823] sm:text-3xl">
                  100%
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[#827C70] sm:text-[11px] sm:tracking-[0.14em]">
                  Tailored Design
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenMonograph}
              className="group inline-flex cursor-pointer items-center gap-4 border-b border-[#292823]/35 pb-2 text-xs uppercase tracking-[0.22em] text-[#292823] transition-colors duration-500 hover:border-[#A58B6B] hover:text-[#A58B6B]"
            >
              <span>Know More</span>
              <ArrowRight className="h-4 w-4 stroke-[1.25] transition-transform duration-500 group-hover:translate-x-2" />
            </button>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
