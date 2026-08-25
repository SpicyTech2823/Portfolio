import ProjectCard from "./ProjectCard";
import weatherApp from "../assets/images/weather-app.jpg";
import cryptography from "../assets/images/Cryptography.jpg";
import expense from "../assets/images/expense-tracker.jpg";
import carRental from "../assets/images/car_rental.png";

const projects = [
  { image: carRental, title: "Car Rental", description: "A web application to browse and book available vehicles.", link: "https://carentalfrontend.netlify.app/", sourceCode: "https://github.com/SpicyTech2823/carental_react_node_web" },
  { image: weatherApp, title: "Weather App", description: "A simple weather experience powered by a live API.", link: "https://weather-app-javascripts.netlify.app/", sourceCode: "https://github.com/SpicyTech2823/weather-app-javascripts" },
  { image: cryptography, title: "Cryptography Lessons", description: "An educational site covering encryption techniques and algorithms.", link: "https://resplendent-syrniki-b796f2.netlify.app/", sourceCode: "https://github.com/SpicyTech2823/Crytography" },
  { image: expense, title: "Expense Tracker", description: "A practical application for managing and tracking expenses.", link: "https://spicytech2823.github.io/Expense-Tracker/", sourceCode: "https://github.com/SpicyTech2823/Expense-Tracker" },
];
const Project = () => <section id="project" className="border-y border-slate-800 bg-slate-900/30"><div className="section"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Selected work</p><h2 className="section-title">A few things I’ve built.</h2></div><p className="max-w-sm text-sm leading-7 text-slate-400">A selection of web products built with clarity, usefulness, and a keen eye for details.</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div></div></section>;
export default Project;
