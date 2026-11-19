import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RevealBlock } from "../ui/RevealBlock";
import { TESTIMONIALS_DATA } from "../../data/testimonials";

export function ClientReflectionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  const changeTestimonial = (direction) => {
    if (!isVisible) return;

    setPendingIndex(
      (activeIndex + direction + TESTIMONIALS_DATA.length) %
        TESTIMONIALS_DATA.length,
    );

    setIsVisible(false);
  };

  useEffect(() => {
    if (pendingIndex === null) return;

    const timer = setTimeout(() => {
      setActiveIndex(pendingIndex);
      setPendingIndex(null);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [pendingIndex]);

  const handlePrevious = () => changeTestimonial(-1);
  const handleNext = () => changeTestimonial(1);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F1E9] border-b border-[#292823]/15">
      <RevealBlock className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-[#A58B6B] mb-8 font-medium">
          CLIENT REFLECTION
        </p>

        <div
          aria-live="polite"
          aria-atomic="true"
          className={`min-h-[300px] sm:min-h-[240px] lg:min-h-[220px] flex flex-col justify-center transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light italic leading-[1.32] text-[#292823] mb-8">
            “{activeTestimonial.quote}”
          </blockquote>

          <div className="text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.22em] uppercase text-[#827C70] leading-relaxed">
            {activeTestimonial.author} &mdash;{" "}
            <span className="text-[#292823]">{activeTestimonial.project}</span>
          </div>
        </div>

        {/* Slider navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
            className="w-11 h-11 border border-[#292823]/25 flex items-center justify-center text-[#292823] hover:bg-[#292823] hover:text-[#F5F1E9] transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58B6B]"
          >
            <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
          </button>

          <span className="font-serif text-sm text-[#827C70] tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="mx-2 text-[#A58B6B]">/</span>
            {String(TESTIMONIALS_DATA.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 border border-[#292823]/25 flex items-center justify-center text-[#292823] hover:bg-[#292823] hover:text-[#F5F1E9] transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58B6B]"
          >
            <ArrowRight className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>

        <p className="mt-8 text-[10px] tracking-[0.16em] uppercase text-[#827C70]/70">
          Sample testimonials — concept demonstration
        </p>
      </RevealBlock>
    </section>
  );
}
