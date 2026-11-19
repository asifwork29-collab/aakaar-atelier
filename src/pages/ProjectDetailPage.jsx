import { Link, useParams } from "react-router";
import { PROJECTS_DATA } from "../data/projects";

export function ProjectDetailPage({ onOpenEnquiry }) {
  const { projectId } = useParams();

  const project = PROJECTS_DATA.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#F5F1E9] px-6 pt-40 pb-24 text-center text-[#292823]">
        <h1 className="font-serif text-4xl">Project Not Found</h1>

        <Link
          to="/#projects"
          className="mt-8 inline-block border-b border-[#292823] pb-1 text-xs uppercase tracking-[0.2em]"
        >
          Return to Projects
        </Link>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-[#F5F1E9] text-[#292823] pt-28 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* TOP HEADER */}
        <div className="py-5 border-b border-[#292823]/15 flex items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#A58B6B] font-medium">
            PROJECT {project.number} • {project.location.toUpperCase()}
          </span>

          <Link
            to="/#projects"
            className="shrink-0 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[#292823] hover:text-[#A58B6B] transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* ORIGINAL EDITORIAL CONTENT */}
        <div className="py-10 lg:py-14">
          {/* TITLE */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#292823] mb-3">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-[#827C70] font-light">
              {project.subtitle || project.category}
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="aspect-[16/9] editorial-img-wrap mb-10 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* PROJECT METADATA */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 mb-10 border-t border-b border-[#292823]/15 text-xs">
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#827C70] mb-1">
                Location
              </span>
              <span className="text-[#292823] font-medium">
                {project.location}
              </span>
            </div>

            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#827C70] mb-1">
                Area
              </span>
              <span className="text-[#292823] font-medium">{project.area}</span>
            </div>

            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#827C70] mb-1">
                Completion
              </span>
              <span className="text-[#292823] font-medium">{project.year}</span>
            </div>

            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#827C70] mb-1">
                Scope
              </span>
              <span className="text-[#292823] font-medium">
                Architecture & Interiors
              </span>
            </div>
          </div>

          {/* NARRATIVE + MATERIALS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7 space-y-5">
              <p className="font-serif text-2xl sm:text-3xl font-light leading-relaxed text-[#292823]">
                {project.summary}
              </p>

              <p className="text-sm sm:text-[15px] text-[#292823]/85 font-light leading-[1.85]">
                {project.narrative}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#D9D0C2]/25 p-6 sm:p-8 border border-[#292823]/12">
              <span className="block text-[10px] tracking-[0.24em] uppercase text-[#A58B6B] mb-4">
                Material Specification
              </span>

              <ul className="space-y-3 text-sm text-[#292823] font-light">
                {project.materials.map((material) => (
                  <li
                    key={material}
                    className="pb-2.5 border-b border-[#292823]/10 flex items-center justify-between"
                  >
                    <span>{material}</span>
                    <span className="text-[#A58B6B] text-xs">•</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECONDARY IMAGE + CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center pt-6 border-t border-[#292823]/15">
            <div className="sm:col-span-7 aspect-[16/10] editorial-img-wrap overflow-hidden">
              <img
                src={project.secondaryImage}
                alt={`${project.title} interior detail`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-5">
              <p className="text-[10px] tracking-[0.24em] uppercase text-[#A58B6B] mb-2">
                Private Dossier
              </p>

              <h2 className="font-serif text-2xl font-light mb-3">
                Interested in a similar commission?
              </h2>

              <p className="text-xs sm:text-sm text-[#827C70] font-light leading-relaxed mb-6">
                Explore how this design approach could be adapted to your own
                space.
              </p>

              <button
                type="button"
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3.5 bg-[#292823] text-[#F5F1E9] text-[11px] tracking-[0.22em] uppercase hover:bg-[#A58B6B] transition-colors cursor-pointer"
              >
                Enquire About This Work
              </button>
            </div>
          </div>

          {/* CONCEPT DISCLAIMER */}
          <p className="mt-12 text-[11px] text-[#827C70] border-t border-[#292823]/15 pt-6">
            Aakaar Atelier is a fictional architecture studio. This project is
            presented as a portfolio concept.
          </p>
        </div>
      </div>
    </article>
  );
}
