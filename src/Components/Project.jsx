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
      className=" p-10 py-20 items-center justify-center md:pb-20 "
    >
      <h2 className="text-3xl font-bold text-center text-amber-200 underline underline-offset-8 mb-8 ">
        Feature<span className="text-yellow-200"> &nbsp;Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20 pt-7 ">
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
    </section>
  );
}
