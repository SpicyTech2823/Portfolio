import Sakirin1 from "../Images/Sakirin1.jpg";
import CV from "../assets/images/CV.pdf";
const Home = () => {
   const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = CV; // use the imported PDF URL directly
    link.download = "Sakirin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <section
        id="home"
        className="h-screen flex flex-col justify-center pl-28 pb-15 ml-10"
      >
        {/* Profile image - shown first on mobile, positioned on the right for md+ */}
        <div className="order-first sm:order-last sm:absolute md:right-[200px] md:top-[230px] w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-200 mx-auto md:mx-0 mb-6 md:mb-0">
          <img src={Sakirin1} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-5xl font-bold text-white uppercase leading-relaxed sans-serif ">
          Hi, I am <br />
          Sakirin Sles.
        </h1>
        <p className="text-white">
          A Cambodian based front-end developer passionate about building <br />{" "}
          accessible and user friendly websites.
        </p>
        <div className="space-x-2 mt-2">
          <button className="bg-yellow-200 p-3 rounded-3xl w-33 mt-4 cursor-pointer">
            Contact
          </button>
          <button
            onClick={onButtonClick}
            className="bg-yellow-200 p-3 rounded-3xl w-40 mt-4 cursor-pointer"
          >
            Download CV
          </button>
        </div>
        {/* <div className="w-82 h-82 rounded-full overflow-hidden border-4 border-yellow-200 absolute right-[200px] top-[230px]">
          <img src={Sakirin1} alt="Profile" />
        </div> */}
      </section>
    </div>
  );
};

export default Home;
