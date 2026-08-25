import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];
const ids = ["home", "about", "skill", "project", "certificate", "contact"];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 20); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-800 bg-slate-950/85 shadow-lg shadow-black/10 backdrop-blur-xl" : "bg-transparent"}`}>
    <nav className="mx-auto flex h-20 w-[min(1120px,calc(100%-2.5rem))] items-center justify-between">
      <a href="#home" className="font-bold tracking-[.18em] text-white">SS<span className="text-amber-300">.</span></a>
      <div className="hidden items-center gap-7 md:flex">{navItems.map((item, index) => <a className="text-sm text-slate-300 transition hover:text-amber-300" href={`#${ids[index]}`} key={item}>{item}</a>)}<a href="#contact" className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200">Let’s talk</a></div>
      <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-white md:hidden">{menuOpen ? <FaTimes /> : <FaBars />}</button>
    </nav>
    {menuOpen && <div className="border-t border-slate-800 bg-slate-950 px-5 pb-5 md:hidden">{navItems.map((item, index) => <a onClick={() => setMenuOpen(false)} className="block border-b border-slate-800 py-3 text-sm text-slate-200" href={`#${ids[index]}`} key={item}>{item}</a>)}</div>}
  </header>;
};
export default Navbar;
