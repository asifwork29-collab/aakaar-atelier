import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

export function ConsultationDrawer({ isOpen, initialScope, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [scope, setScope] = useState("Architectural Spatial Planning");
  const [brief, setBrief] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEscapeKey(onClose, isOpen);
  useBodyScrollLock(isOpen);

  useEffect(() => {
    setScope(initialScope || "Architectural Spatial Planning");
    setConfirmed(false);
  }, [initialScope, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-[#292823]/35 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        aria-label="Private Consultation Drawer"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xl bg-[#F5F1E9] text-[#292823] shadow-2xl overflow-y-auto p-6 sm:p-12 flex flex-col justify-between transform-gpu will-change-transform transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#292823]/15 mb-8">
            <div>
              <span className="text-[10px] tracking-[0.26em] uppercase text-[#A58B6B] block mb-1">
                PRIVATE ENQUIRY
              </span>
              <h3 className="font-serif text-3xl font-light">
                Commission a Conversation
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.22em] uppercase text-[#827C70] hover:text-[#292823] p-2 cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4 stroke-[1.25]" />
            </button>
          </div>

          <p className="text-sm text-[#827C70] font-light leading-relaxed mb-8">
            Share a few details regarding your property and aspirations. Our
            Kolkata studio conducts initial consultations either in person at
            Alipore or privately via video.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="editorial-input"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="editorial-input"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98300 00000"
                  className="editorial-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-1.5">
                Commission Type
              </label>
              <select
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="editorial-input bg-transparent cursor-pointer"
              >
                {initialScope &&
                  ![
                    "Architectural Spatial Planning",
                    "Bespoke Interior Architecture",
                    "Custom Furniture & Millwork",
                    "Art & Object Curation",
                  ].includes(initialScope) && (
                    <option value={initialScope}>{initialScope}</option>
                  )}
                <option value="Architectural Spatial Planning">
                  Architectural Spatial Planning
                </option>
                <option value="Bespoke Interior Architecture">
                  Bespoke Interior Architecture
                </option>
                <option value="Custom Furniture & Millwork">
                  Custom Furniture &amp; Millwork
                </option>
                <option value="Art & Object Curation">
                  Art &amp; Object Curation
                </option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-1.5">
                Project Brief *
              </label>
              <textarea
                rows={3}
                required
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Location, approximate sq. ft., and expected possession or start date..."
                className="editorial-input resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#292823] text-[#F5F1E9] text-[11px] tracking-[0.24em] uppercase hover:bg-[#A58B6B] transition-colors duration-500 cursor-pointer"
            >
              Request Private Consultation
            </button>

            {confirmed && (
              <div
                role="status"
                className="p-5 bg-[#D9D0C2]/35 border border-[#A58B6B]/40 text-sm"
              >
                <p className="font-serif text-xl italic text-[#292823] mb-1">
                  Enquiry Preview Complete
                </p>
                <p className="text-[#827C70] font-light">
                  This is a demonstration form. No information has been sent or
                  saved.
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="pt-8 mt-10 border-t border-[#292823]/15 flex items-center justify-between text-xs text-[#827C70]">
          <span>18B Burdwan Road, Alipore, Kolkata</span>
          <span>+91 33 4062 8190</span>
        </div>
      </aside>
    </>
  );
}
