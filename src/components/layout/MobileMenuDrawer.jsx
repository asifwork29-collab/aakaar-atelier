import { X } from "lucide-react";
import { Link } from "react-router";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

export function MobileMenuDrawer({ isOpen, onClose, onOpenEnquiry }) {
  useEscapeKey(onClose, isOpen);
  useBodyScrollLock(isOpen);

  const links = [
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "Studio", href: "/#studio" },
    { label: "Journal", href: "/#journal" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div
      inert={!isOpen}
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 bg-[#292823] text-[#F5F1E9] flex flex-col justify-between p-8 sm:p-12 transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between border-b border-[#F5F1E9]/15 pb-6">
        <span className="font-serif text-lg tracking-[0.26em] uppercase">
          AAKAAR ATELIER
        </span>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[#D9D0C2] hover:text-[#F5F1E9] p-2 cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4 stroke-[1.25]" />
        </button>
      </div>

      <nav className="flex flex-col space-y-6 my-auto">
        {links.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={onClose}
            className="font-serif text-4xl sm:text-5xl font-light hover:text-[#A58B6B] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-[#F5F1E9]/15 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs text-[#D9D0C2]/80 tracking-wider">
          18B Burdwan Road, Alipore, Kolkata 700027
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenEnquiry();
          }}
          className="w-full sm:w-auto px-6 py-3 border border-[#A58B6B] text-[#F5F1E9] text-[11px] tracking-[0.22em] uppercase hover:bg-[#A58B6B] transition-colors cursor-pointer"
        >
          Book Private Consultation
        </button>
      </div>
    </div>
  );
}
