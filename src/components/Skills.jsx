import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiCplusplus,
  SiFirebase,
  SiPostman,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiNginx,
  SiPrisma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { DiRedis } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

export default function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: "SQL", icon: <BsFiletypeSql className="text-orange-700" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "MySql", icon: <SiMysql className="text-orange-500" /> },
    { name: "PostgreeSql", icon: <SiPostgresql className="text-blue-800" /> },
    { name: "NextJs", icon: <SiNextdotjs className="text-black" /> },
    { name: "Git", icon: <SiGit className="text-red-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-black" /> },
    { name: "Redis", icon: <DiRedis className="text-red-600" /> },
    { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-black" /> },
    { name: "Linux", icon: <FcLinux className="text-black" /> },
  ];

  return (
    <section id="skills" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🛠️Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 hover:scale-120 transition-all duration-200"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-600">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
