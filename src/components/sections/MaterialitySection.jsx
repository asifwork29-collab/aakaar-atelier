import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { RevealBlock } from "../ui/RevealBlock";
import { MATERIALS_DATA } from "../../data/materials";

export function MaterialitySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeMaterial = MATERIALS_DATA[selectedIndex];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#292823] text-[#F5F1E9]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <RevealBlock className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#A58B6B] mb-4 font-medium">
              THE MATERIAL PALETTE
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1]">
              Honest materials that{" "}
              <span className="italic font-light text-[#D9D0C2]">
                age with grace.
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#D9D0C2]/80 font-light leading-relaxed max-w-md">
            We reject synthetic veneers and high-gloss finishes in favor of
            tactile, breathable surfaces quarried, felled, and hand-finished
            across the Indian subcontinent.
          </p>
        </RevealBlock>

        <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Material Selector Tabs */}
          <div className="lg:col-span-5 border-t border-[#F5F1E9]/15">
            {MATERIALS_DATA.map((mat, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={mat.title}
                  aria-pressed={isSelected}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full py-6 border-b border-[#F5F1E9]/15 flex items-center justify-between text-left group transition-opacity duration-300 cursor-pointer ${
                    isSelected ? "opacity-100" : "opacity-50 hover:opacity-90"
                  }`}
                >
                  <div>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#A58B6B] block mb-1">
                      {mat.tag}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-light text-[#F5F1E9]">
                      {mat.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 text-[#A58B6B] stroke-[1.25] transition-all duration-300 ${
                      isSelected
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Material Preview Card */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center bg-[#23221D] border border-[#F5F1E9]/12 p-6 sm:p-10">
            <div className="sm:col-span-6 aspect-[4/4.5] overflow-hidden bg-[#292823]">
              <img
                key={activeMaterial.image}
                src={activeMaterial.image}
                alt={activeMaterial.title}
                className="w-full h-full object-cover transition-opacity duration-700"
              />
            </div>

            <div className="sm:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-[10px] tracking-[0.24em] uppercase text-[#A58B6B] mb-3">
                  {activeMaterial.origin}
                </p>
                <h3 className="font-serif text-3xl font-light text-[#F5F1E9] mb-4">
                  {activeMaterial.title}
                </h3>
                <p className="text-sm text-[#D9D0C2]/85 font-light leading-[1.85] mb-6">
                  {activeMaterial.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-[#F5F1E9]/12 flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-[#D9D0C2]/70">
                <span>Finish: {activeMaterial.finish}</span>
                <span>{activeMaterial.index}</span>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
