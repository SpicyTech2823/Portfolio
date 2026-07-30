export default function ProjectCard({
  image,
  title,
  description,
  link,
  source_code,
}) {
  return (
    <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/95 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 md:h-72"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

        <span className="absolute bottom-5 left-5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200 backdrop-blur-sm">
          Featured
        </span>
      </div>

      <div className="flex flex-col p-6 sm:p-7 h-[calc(100%-18rem)]">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-amber-200 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            View
          </a>

          <a
            href={source_code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full border border-amber-200 px-4 py-2 text-center text-sm font-semibold text-amber-200 transition hover:bg-amber-200 hover:text-slate-950"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}