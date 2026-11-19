import { ArrowRight } from "lucide-react";
import { RevealBlock } from "../ui/RevealBlock";
import { JOURNAL_DATA } from "../../data/journal";

export function JournalSection({ onSelectArticle }) {
  return (
    <section
      id="journal"
      className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E9] border-b border-[#292823]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <RevealBlock className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#A58B6B] mb-4 font-medium">
              THE JOURNAL
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.08] text-[#292823]">
              Notes on architecture,{" "}
              <span className="italic font-light">craft &amp; stillness.</span>
            </h2>
          </div>
          <p className="text-xs tracking-[0.18em] uppercase text-[#827C70]">
            Monographs &amp; Studio Essays
          </p>
        </RevealBlock>

        <RevealBlock className="grid grid-cols-1 lg:grid-cols-3 border-t border-b border-[#292823]/15">
          {JOURNAL_DATA.map((article, idx) => {
            const borderClasses =
              idx === 0
                ? "lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#292823]/15"
                : idx === 1
                  ? "lg:px-10 border-b lg:border-b-0 lg:border-r border-[#292823]/15"
                  : "lg:pl-10";

            return (
              <article
                key={article.number}
                className={`group py-10 lg:py-12 ${borderClasses} flex flex-col`}
              >
                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="w-full h-full flex flex-col justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58B6B]"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden mb-7">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[#827C70] mb-3">
                      <span>
                        {article.number} &bull; {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[28px] font-light leading-[1.22] text-[#292823] group-hover:text-[#A58B6B] transition-colors mb-4">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#827C70] font-light leading-[1.8] mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <span className="inline-flex items-center space-x-3 text-[11px] tracking-[0.2em] uppercase text-[#292823] group-hover:text-[#A58B6B] transition-colors">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[1.25] transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </button>
              </article>
            );
          })}
        </RevealBlock>
      </div>
    </section>
  );
}
