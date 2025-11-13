const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center pl-28 pb-15 text-white flex-row pt-40 gap-40 mb-[100px] mr-65"
    >
      <h1 className="text-5xl font-bold uppercase leading-relaxed sans-serif underline decoration-yellow-200 underline-offset-8">
        About Me
      </h1>
      <p className="text-lg mt-4 max-w-3xl right-1.5 ">
        <span className="font-bold italic">
          I am a front-end developer based in Cambodia,
        </span>
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
