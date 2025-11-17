import Sakirin1 from "../Images/Sakirin1.jpg";
import CV from "../assets/images/CV.pdf";

const Home = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Sakirin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-28 bg-gray-900"
      >
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase leading-relaxed">
            Hi, I am <br />
            Sakirin Sles.
          </h1>
          <p className="text-white text-sm sm:text-base mt-3">
            A Cambodian based front-end developer passionate about building
            accessible and user-friendly websites.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3 mt-5">
            <button className="bg-yellow-200 text-black px-6 py-3 rounded-3xl w-full sm:w-auto mb-3 sm:mb-0 hover:bg-yellow-300 transition">
              <a href="https://github.com/SpicyTech2823" target="blank" >GitHub</a>
              <i class="fa-brands fa-github"></i> 
            </button>
            <button
              onClick={onButtonClick}
              className="bg-yellow-200 text-black px-6 py-3 rounded-3xl w-full sm:w-auto hover:bg-yellow-300 transition"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-200">
            <img
              src={Sakirin1}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
