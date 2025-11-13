import weatherAapp from "../assets/images/weather-app.jpg";
import cryptograpgy from "../assets/images/Cryptography.jpg";
export default function Project(){
  const projects = [
    {
      image: weatherAapp,
      title: "Weather App",
      description: "This is a simple weather app using html css and javascripts by fetching API.",
      link: "https://weather-app-javascripts.netlify.app/"
    },
    {
      image: cryptograpgy,
      title: "Cryptography Lesson Website",
      description: "A website that provides lessons on cryptography, including various encryption techniques and algorithms.",
      link:"https://resplendent-syrniki-b796f2.netlify.app/",
    }
  ];
  return (
    <section id="project" className="min-h-screen py-20 bg-black ml-20">
        <h2 className="text-3xl font-bold text-center text-white mb-8 ">
          Feature<span className="text-yellow-200"> &nbsp;Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20 pt-7 ">
            {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">  
                    <img src={project.image} alt={project.title} className="w-full h-60 object-cover mx-auto"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>  
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:underline">
                            View Project
                        </a>  
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
} 
