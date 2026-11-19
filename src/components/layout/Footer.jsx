import { ArrowUp } from "lucide-react";
import { Link } from "react-router";

export function Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#292823] text-[#D9D0C2]/80 py-16 sm:py-20 border-t border-[#F5F1E9]/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F5F1E9]/12">
          <div>
            <Link
              to="/#top"
              className="font-serif text-xl tracking-[0.26em] uppercase text-[#F5F1E9] block mb-2"
            >
              AAKAAR ATELIER
            </Link>

            <p className="text-xs tracking-[0.14em] uppercase text-[#D9D0C2]/60">
              Quiet Luxury. Indian Soul. &mdash; Alipore, Kolkata
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-8 gap-y-5 text-[11px] tracking-[0.22em] uppercase"
          >
            <Link
              to="/#projects"
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Projects
            </Link>

            <Link
              to="/#services"
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Services
            </Link>

            <Link
              to="/#studio"
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Studio
            </Link>

            <Link
              to="/#journal"
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Journal
            </Link>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="hover:text-[#A58B6B] transition-colors uppercase tracking-[0.22em] cursor-pointer"
            >
              Enquire
            </button>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#D9D0C2]/55">
          <p>
            &copy; {new Date().getFullYear()} Aakaar Atelier.
            <span className="block mt-1 text-[10px] tracking-[0.08em]">
              Fictional studio — portfolio concept.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/#contact"
              className="hover:text-[#F5F1E9] transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/#top"
              className="inline-flex items-center gap-1.5 text-[#F5F1E9]/80 hover:text-[#A58B6B] transition-colors uppercase tracking-[0.18em] text-[10px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
