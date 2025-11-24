const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:pl-28 pb-12 md:pb-15 pt-20 md:pt-40 gap-6 md:gap-40 mb-6 md:mb-[100px] md:px-28"
    >
      <h1 className="text-3xl md:text-5xl font-bold uppercase leading-relaxed underline text-yellow-200 underline-offset-8 ">
        About Me
      </h1>
      <p className="text-base md:text-lg mt-4 max-w-3xl leading-tight text-white">
        <span className="font-bold italic">
          I am a front-end developer based in Cambodia,
        </span>{" "}
        specializing in creating beautiful, functional, and user-friendly
        websites. With a strong foundation in HTML, CSS, and JavaScript, I bring
        designs to life with clean and efficient code. I am passionate about web
        development and continuously strive to learn new technologies and
        improve my skills.
      </p>
    </section>
  );
};

export default About;
