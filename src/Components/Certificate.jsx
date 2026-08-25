import OOAD from "../assets/images/OOAD.png";
import stem2024 from "../assets/images/stem2024.png";
import stem2025 from "../assets/images/stem.png";
import robotics from "../assets/images/Robotic.png";
import kangaroo from "../assets/images/math_kangaroo.png";
import cloud from "../assets/images/cloud.png";
const certificates = [OOAD, stem2024, stem2025, robotics, kangaroo, cloud];
const Certificate = () => <section id="certificate" className="section"><div className="text-center"><p className="eyebrow">Professional growth</p><h2 className="section-title">Certifications & milestones.</h2><p className="section-copy mx-auto">A few moments from my ongoing commitment to learn, explore, and build.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{certificates.map((image, index) => <div key={image} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-2 transition duration-300 hover:-translate-y-1 hover:border-amber-300/50"><img src={image} alt={`Certificate ${index + 1}`} className="aspect-[4/3] w-full rounded-xl object-cover" /></div>)}</div></section>;
export default Certificate;
