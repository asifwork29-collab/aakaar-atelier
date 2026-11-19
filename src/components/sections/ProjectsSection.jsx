import { useState } from "react";
import { RevealBlock } from "../ui/RevealBlock";
import { PROJECTS_DATA } from "../../data/projects";

export function ProjectsSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Contemporary Apartment",
    "Heritage Revival",
    "Minimalist Villa",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E9] border-b border-[#292823]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#A58B6B] mb-4 font-medium">
              SELECTED PROJECTS
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-[1.08] text-[#292823]">
              Homes we have <span className="italic font-light">shaped.</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter Projects"
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-[11px] tracking-[0.2em] uppercase"
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(cat)}
                  className={`pb-1.5 border-b transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#292823] border-[#292823]"
                      : "text-[#827C70] border-transparent hover:text-[#292823]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </RevealBlock>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 sm:gap-y-24 lg:gap-x-12">
          {filteredProjects.map((project) => {
            const spacingClass =
              activeFilter === "All" ? project.layoutClass : "lg:col-span-6";
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${spacingClass} group cursor-pointer`}
              >
                <div
                  className={`${project.aspectClass} editorial-img-wrap mb-6 relative`}
                >
                  <img
                    src={project.image}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";
                    }}
                    alt={`${project.title} — ${project.category} in ${project.location}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#F5F1E9]/95 text-[#292823] px-4 py-2 text-[10px] tracking-[0.22em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    View Case Study &rarr;
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 pt-1 border-t border-[#292823]/15">
                  <div>
                    <div className="flex items-center space-x-3 text-[11px] tracking-[0.2em] uppercase text-[#827C70] mt-3 mb-1.5">
                      <span className="text-[#A58B6B] font-medium">
                        {project.number}
                      </span>
                      <span>&bull;</span>
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#292823] group-hover:text-[#A58B6B] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#827C70] font-light mt-1">
                      {project.subtitle || project.category}
                    </p>
                  </div>

                  <span className="mt-4 text-xs tracking-[0.18em] uppercase text-[#292823]/70 group-hover:text-[#A58B6B] transition-colors hidden sm:inline-block">
                    {project.year}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
