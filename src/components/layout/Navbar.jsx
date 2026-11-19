import { Menu } from "lucide-react";
import { Link } from "react-router";

export function Navbar({ isScrolled, onOpenEnquiry, onOpenMobileMenu }) {
  const navLinks = [
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "Studio", href: "/#studio" },
    { label: "Journal", href: "/#journal" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-[#F5F1E9]/95 backdrop-blur-sm text-[#292823] border-b border-[#D9D0C2]"
          : "bg-transparent text-[#F5F1E9] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-20 lg:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/#top"
          className="font-serif text-lg sm:text-xl tracking-[0.26em] uppercase font-normal focus:outline-none"
        >
          AAKAAR ATELIER
        </Link>

        {/* Desktop Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center space-x-10 text-[11px] tracking-[0.22em] uppercase font-normal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full focus-visible:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-5">
          <button
            type="button"
            onClick={onOpenEnquiry}
            className={`hidden sm:inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase border transition-all duration-500 cursor-pointer ${
              isScrolled
                ? "border-[#292823]/40 hover:border-[#A58B6B] hover:bg-[#A58B6B] hover:text-[#F5F1E9]"
                : "border-[#F5F1E9]/50 hover:border-[#A58B6B] hover:bg-[#A58B6B] hover:text-[#F5F1E9]"
            }`}
          >
            Enquire
          </button>

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 -mr-2 focus:outline-none cursor-pointer"
          >
            <Menu className="w-5 h-5 stroke-[1.25]" />
          </button>
        </div>
      </div>
    </header>
  );
}
