const About = () => (
  <section id="about" className="border-y border-slate-800 bg-slate-900/30">
    <div className="section grid gap-12 py-24 md:grid-cols-[.8fr_1.2fr] md:items-start">
      <div>
        <p className="eyebrow">A little about me</p>
        <h2 className="section-title">
          Curious by nature. Intentional by craft.
        </h2>
      </div>
      <div>
        <p className="section-copy text-base sm:text-lg">
          I’m a developer based in Cambodia, focused on creating polished,
          user-friendly websites and applications. I combine a strong HTML, CSS,
          and JavaScript foundation with a continual drive to learn and improve.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-700 pt-7 text-sm text-slate-300">
          <span>
            <b className="block text-amber-300">Based in</b>Phnom Penh, Cambodia
          </span>
          <span>
            <b className="block text-amber-300">Focus</b>Web & app development
          </span>
          <span>
            <b className="block text-amber-300">Approach</b>Clean, accessible
            design
          </span>
        </div>
      </div>
    </div>
  </section>
);
export default About;
