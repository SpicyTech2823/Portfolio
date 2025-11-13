import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiMysql,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-6xl text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-6xl text-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-6xl text-blue-500" /> },
    { name: "Django", icon: <SiDjango className="text-6xl text-green-800" /> },
    { name: "PHP", icon: <FaPhp className="text-6xl text-purple-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-6xl text-blue-800" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-blue-400" /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-6xl text-blue-700" /> },
    { name: "Figma", icon: <SiFigma className="text-6xl text-pink-500" /> },
]
    
const Skills = () => {
  return (
    <div id="skill" className="min-h-screen bg-black px-10 py-20 ml-20  mt-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-8 ">
          My <span className="text-yellow-200">Skills</span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 p-4">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-2 text-white">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Skills;
