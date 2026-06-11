export default function ProjectCard({ image, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/95 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        <span className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200 backdrop-blur-sm">
          featured
        </span>
      </div>
      <div className="flex h-full flex-col gap-5 p-6 sm:p-7">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>
        <div className="inline-flex items-center justify-center rounded-full bg-amber-200 px-5 py-2 text-sm font-semibold text-slate-950 transition duration-200 group-hover:bg-yellow-300">
          View Project
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
