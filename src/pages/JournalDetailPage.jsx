import { Link, useParams } from "react-router";
import { JOURNAL_DATA } from "../data/journal";

export function JournalDetailPage() {
  const { articleId } = useParams();

  const article = JOURNAL_DATA.find((item) => item.id === articleId);

  if (!article) {
    return (
      <section className="min-h-screen bg-[#F5F1E9] px-6 pt-40 pb-24 text-center text-[#292823]">
        <h1 className="font-serif text-4xl">Article Not Found</h1>

        <Link
          to="/#journal"
          className="mt-8 inline-block border-b border-[#292823] pb-1 text-xs uppercase tracking-[0.2em]"
        >
          Return to Journal
        </Link>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F1E9] text-[#292823] pt-28 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* ORIGINAL MODAL TOP HEADER */}
        <div className="py-5 border-b border-[#292823]/15 flex items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#A58B6B] font-medium">
            {article.number.toUpperCase()} • {article.category.toUpperCase()}
          </span>

          <Link
            to="/#journal"
            className="shrink-0 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[#292823] hover:text-[#A58B6B] transition-colors"
          >
            ← Back to Journal
          </Link>
        </div>

        {/* ORIGINAL JOURNAL CONTENT */}
        <div className="py-10 lg:py-14">
          <article className="max-w-3xl mx-auto">
            {/* DATE AND READING TIME */}
            <div className="flex items-center space-x-4 text-[11px] tracking-[0.2em] uppercase text-[#827C70] mb-4">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            {/* TITLE */}
            <h1 className="font-serif text-4xl sm:text-5xl font-light leading-[1.14] text-[#292823] mb-8">
              {article.title}
            </h1>

            {/* HERO IMAGE */}
            <div className="aspect-[16/9] editorial-img-wrap mb-10">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* LEAD PARAGRAPH */}
            <p className="font-serif text-2xl sm:text-[26px] italic font-light leading-relaxed text-[#292823] mb-8 pb-8 border-b border-[#292823]/15">
              {article.lead}
            </p>

            {/* ARTICLE BODY */}
            <div className="space-y-6 text-base text-[#292823]/85 font-light leading-[1.9]">
              {article.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* ARTICLE FOOTER */}
            <div className="mt-12 pt-8 border-t border-[#292823]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <span className="text-xs tracking-[0.16em] uppercase text-[#827C70]">
                Published by Aakaar Atelier, Kolkata
              </span>

              <Link
                to="/#journal"
                className="text-xs tracking-[0.2em] uppercase text-[#292823] hover:text-[#A58B6B] transition-colors"
              >
                ← Return to Journal
              </Link>
            </div>

            <p className="mt-10 text-[11px] text-[#827C70]">
              Aakaar Atelier is a fictional studio. This article is part of a
              portfolio concept.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
