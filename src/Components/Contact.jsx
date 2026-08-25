import Swal from "sweetalert2";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); formData.append("access_key", "dd64c439-81c3-432c-b88a-9091eaf3aff6");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(Object.fromEntries(formData)) });
      const result = await response.json();
      if (!result.success) throw new Error();
      await Swal.fire({ title: "Message sent", text: "Thanks — I’ll get back to you soon.", icon: "success", confirmButtonColor: "#fbbf24" }); event.target.reset();
    } catch { Swal.fire({ title: "Couldn’t send message", text: "Please try again later or email me directly.", icon: "error" }); }
  };
  const inputClass = "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/15";
  return <section id="contact" className="border-t border-slate-800 bg-slate-900/30"><div className="section grid gap-12 md:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Get in touch</p><h2 className="section-title">Let’s make something great.</h2><p className="section-copy">Have a project in mind, an opportunity, or just want to connect? My inbox is always open.</p><div className="mt-9 space-y-5 text-sm text-slate-300"><a href="mailto:sakirinsles@gmail.com" className="flex items-center gap-4 hover:text-amber-300"><FaEnvelope className="text-amber-300" /> sakirinsles@gmail.com</a><a href="tel:+855888306474" className="flex items-center gap-4 hover:text-amber-300"><FaPhone className="text-amber-300" /> +855 88 830 6474</a><p className="flex items-center gap-4"><FaLocationDot className="text-amber-300" /> Phnom Penh, Cambodia</p></div></div><form onSubmit={onSubmit} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8"><label className="text-sm font-medium text-slate-200">Name<input required name="name" placeholder="Your name" className={inputClass} /></label><label className="mt-5 block text-sm font-medium text-slate-200">Email<input required name="email" type="email" placeholder="you@example.com" className={inputClass} /></label><label className="mt-5 block text-sm font-medium text-slate-200">Message<textarea required name="message" rows="5" placeholder="Tell me a little about your project..." className={inputClass} /></label><button type="submit" className="mt-6 w-full rounded-xl bg-amber-300 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200">Send message</button></form></div></section>;
};
export default Contact;
