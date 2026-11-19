import { useState } from "react";
import { RevealBlock } from "../ui/RevealBlock";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    scope: "Architectural Spatial Planning",
    brief: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      location: "",
      scope: "Architectural Spatial Planning",
      brief: "",
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E9]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left Studio Info */}
          <RevealBlock className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#A58B6B] mb-4 font-medium">
              PRIVATE CONSULTATIONS
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] text-[#292823] mb-6">
              Begin a conversation about{" "}
              <span className="italic font-light">your space.</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-[#827C70] font-light leading-[1.85] mb-12">
              Whether commissioning a new residence in Kolkata, restoring an
              ancestral home, or seeking bespoke spatial direction across India,
              we welcome private enquiries.
            </p>

            <div className="space-y-8 border-t border-[#292823]/15 pt-8 text-sm">
              <div>
                <span className="block text-[10px] tracking-[0.24em] uppercase text-[#A58B6B] mb-1.5">
                  Kolkata Atelier
                </span>
                <p className="text-[#292823] font-normal leading-relaxed">
                  18B Burdwan Road, Alipore
                  <br />
                  Kolkata 700027, West Bengal, India
                </p>
                <p className="text-xs text-[#827C70] mt-1 italic">
                  Visits by private appointment only.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="block text-[10px] tracking-[0.24em] uppercase text-[#A58B6B] mb-1.5">
                    New Commissions
                  </span>
                  <a
                    href="mailto:studio@aakaaratelier.in"
                    className="text-[#292823] hover:text-[#A58B6B] transition-colors"
                  >
                    studio@aakaaratelier.in
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.24em] uppercase text-[#A58B6B] mb-1.5">
                    Telephone
                  </span>
                  <a
                    href="tel:+913340628190"
                    className="text-[#292823] hover:text-[#A58B6B] transition-colors"
                  >
                    +91 33 4062 8190
                  </a>
                </div>
              </div>
            </div>
          </RevealBlock>

          {/* Right Inline Enquiry Form */}

          <RevealBlock className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#D9D0C2]/20 border border-[#292823]/15 p-5 sm:p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Aarav Singhania"
                    className="editorial-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="aarav@domain.com"
                    className="editorial-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label
                    htmlFor="contact-location"
                    className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-2"
                  >
                    Project Location
                  </label>
                  <input
                    id="contact-location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="Alipore, Kolkata / New Delhi / Mumbai"
                    className="editorial-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-scope"
                    className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-2"
                  >
                    Scope of Enquiry
                  </label>
                  <select
                    id="contact-scope"
                    name="scope"
                    value={formData.scope}
                    onChange={(e) =>
                      setFormData({ ...formData, scope: e.target.value })
                    }
                    className="editorial-input bg-transparent cursor-pointer w-full min-w-0 pr-7 text-xs sm:text-sm"
                  >
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
              </div>

              <div className="mb-10">
                <label
                  htmlFor="contact-brief"
                  className="block text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-2"
                >
                  Tell Us About Your Residence &amp; Timeline *
                </label>
                <textarea
                  id="contact-brief"
                  name="brief"
                  rows={4}
                  required
                  value={formData.brief}
                  onChange={(e) =>
                    setFormData({ ...formData, brief: e.target.value })
                  }
                  placeholder="Approximate area (sq. ft.), architectural stage, and desired timeline..."
                  className="editorial-input resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#827C70] font-light">
                  Demo form — no information will be sent or saved.
                </span>

                <button
                  type="submit"
                  className="px-8 py-4 bg-[#292823] text-[#F5F1E9] text-[11px] tracking-[0.24em] uppercase hover:bg-[#A58B6B] transition-colors duration-500 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="mt-8 pt-6 border-t border-[#292823]/15 text-sm text-[#292823]"
                >
                  <p className="font-serif text-2xl italic text-[#A58B6B] mb-1">
                    Enquiry preview complete.
                  </p>

                  <p className="font-light text-[#292823]/85">
                    This is a demonstration form. No information has been sent
                    or saved.
                  </p>
                </div>
              )}
            </form>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
