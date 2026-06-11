import ProjectCard from "./ProjectCard";
import weatherAapp from "../assets/images/weather-app.jpg";
import cryptograpgy from "../assets/images/Cryptography.jpg";
import expense from "../assets/images/expense-tracker.jpg";
import car_rental from "../assets/images/car_rental.png";
export default function Project() {
  const projects = [
    {
      image: weatherAapp,
      title: "Weather App",
      description:
        "This is a simple weather app using html css and javascripts by fetching API.",
      link: "https://weather-app-javascripts.netlify.app/",
    },
    {
      image: cryptograpgy,
      title: "Cryptography Lesson Website",
      description:
        "A website that provides lessons on cryptography, including various encryption techniques and algorithms.",
      link: "https://resplendent-syrniki-b796f2.netlify.app/",
    },
    {
      image: expense,
      title: "Expense Tracker",
      description:
        "An expense tracker web application that helps users manage their finances by tracking expenses.",
      link: "https://spicytech2823.github.io/Expense-Tracker/",
    },
    {
      image: car_rental,
      title: "Car Rental",
      description:
        "A car rental web application that allows users to browse and book available vehicles.",
      link: "https://car-rental-nine-virid.vercel.app/",
    },
  ];
  return (
    <section
      id="project"
      className="scroll-mt-28 bg-slate-950/75 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-amber-200 underline underline-offset-8 mb-8">
          Feature<span className="text-yellow-200"> &nbsp;Projects</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center text-slate-300 mb-12 sm:text-lg">
          Here are some of my recent projects. Click any card to open the live
          demo.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
