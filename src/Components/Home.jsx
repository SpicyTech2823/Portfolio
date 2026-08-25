import { FaArrowDown, FaGithub } from "react-icons/fa";
import CV from "../assets/images/sles_sakirin_cv.pdf";
import profile from "../assets/images/profile.jpg";

const Home = () => (
  <section id="home" className="page-shell flex min-h-screen items-center pt-20">
    <div className="section grid items-center gap-14 py-16 md:grid-cols-[1.15fr_.85fr]">
      <div>
        <p className="eyebrow reveal">Web & app developer · Cambodia</p>
        <h1 className="section-title reveal-delay mt-5 max-w-3xl text-5xl sm:text-6xl md:text-7xl">Building thoughtful digital experiences.</h1>
        <p className="reveal-delay-2 mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Hi, I’m <span className="font-semibold text-amber-300">Sakirin Sles</span>. I turn ideas into clean, accessible websites and applications that feel as good as they function.</p>
        <div className="reveal-delay-2 mt-9 flex flex-wrap gap-3">
          <a href="#project" className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200">Explore my work</a>
          <a href={CV} download="sles_sakirin_cv.pdf" className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-200">Download CV</a>
        </div>
        <div className="reveal-delay-2 mt-9 flex items-center gap-4 text-slate-400">
          <a aria-label="GitHub profile" href="https://github.com/SpicyTech2823" target="_blank" rel="noreferrer" className="transition hover:text-amber-300"><FaGithub size={21} /></a>
          <span className="ml-2 h-px w-14 bg-slate-700" />
          <a href="#about" className="flex items-center gap-2 text-sm hover:text-white">Scroll to discover <FaArrowDown /></a>
        </div>
      </div>
      <div className="relative mx-auto w-fit reveal-delay">
        <div className="absolute inset-0 rounded-full border border-amber-300/50" style={{ animation: "pulse-ring 3s ease-in-out infinite" }} />
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-slate-800 shadow-2xl shadow-amber-500/10 sm:h-80 sm:w-80" style={{ animation: "float 5s ease-in-out infinite" }}>
          <img src={profile} alt="Sakirin Sles" className="h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-4 -left-7 rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm shadow-xl backdrop-blur"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />Open to opportunities</div>
      </div>
    </div>
  </section>
);

export default Home;
