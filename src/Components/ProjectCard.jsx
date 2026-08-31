import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
const ProjectCard = ({ image, title, description, link, sourceCode }) => (
  <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-amber-300/50 hover:shadow-2xl hover:shadow-amber-900/10">
    <div className="relative h-52 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">
        {description}
      </p>
      <div className="mt-5 flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"
        >
          Live demo <FaArrowUpRightFromSquare />
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} source code`}
          className="text-slate-400 hover:text-white"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </article>
);
export default ProjectCard;
