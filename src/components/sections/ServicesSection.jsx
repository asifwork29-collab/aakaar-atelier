import { useState } from "react";
import { Plus } from "lucide-react";
import { RevealBlock } from "../ui/RevealBlock";
import { SERVICES_DATA } from "../../data/services";

export function ServicesSection({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 lg:py-40 bg-[#D9D0C2]/25 border-b border-[#292823]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <RevealBlock className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#A58B6B] mb-4 font-medium">
              SERVICES &amp; PROCESS
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light leading-[1.12] text-[#292823] mb-6">
              Holistic spatial{" "}
              <span className="italic font-light">stewardship.</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-[#827C70] font-light leading-[1.85] mb-8">
              We accept a limited number of commissions each year to ensure
              principal involvement from the first architectural sketch to the
              final placement of objects and textiles.
            </p>
            <button
              type="button"
              onClick={() => onOpenEnquiry("Architectural Spatial Planning")}
              className="inline-flex items-center space-x-3 text-[11px] tracking-[0.22em] uppercase text-[#292823] border border-[#292823]/35 px-6 py-3.5 hover:bg-[#292823] hover:text-[#F5F1E9] transition-all duration-500 cursor-pointer"
            >
              <span>Request Studio Dossier</span>
            </button>
          </RevealBlock>

          <RevealBlock className="lg:col-span-8 border-t border-[#292823]/15">
            {SERVICES_DATA.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={service.number}
                  className="border-b border-[#292823]/15"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    className="w-full py-8 sm:py-9 flex items-start sm:items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-serif text-lg sm:text-xl text-[#A58B6B]">
                        {service.number}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#292823] group-hover:text-[#A58B6B] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <Plus
                      className={`w-5 h-5 text-[#827C70] stroke-[1.25] shrink-0 transition-transform duration-500 ${
                        isOpen ? "rotate-45 text-[#292823]" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pl-10 sm:pl-16 pr-4 ${
                      isOpen
                        ? "max-h-96 pb-8 sm:pb-10 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm sm:text-[15px] text-[#292823]/85 font-light leading-[1.85] max-w-2xl mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-[11px] tracking-[0.16em] uppercase text-[#827C70]">
                      {service.deliverables.map((item) => (
                        <span key={item}>&bull; {item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
