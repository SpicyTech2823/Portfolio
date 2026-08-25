import { FaArrowUp } from "react-icons/fa6";
const Footer = () => <footer className="border-t border-slate-800 bg-slate-950 py-7"><div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] items-center justify-between text-sm text-slate-500"><p>© {new Date().getFullYear()} Sakirin Sles</p><a href="#home" aria-label="Back to top" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-amber-300 hover:text-amber-300"><FaArrowUp /></a></div></footer>;
export default Footer;
