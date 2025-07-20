import React from "react";
import Image from "next/image";
import Link from "next/link";
import MiniProjectsCard from "./Miniproject";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "Shortly",
    desc: "URL shortener app with custom alias support and analytics.",
    github: "https://github.com/impriteshmishra/Shortly",
    deploy: "http://13.127.158.54",
    image: "/Shortly.png",
  },
  {
    name: "People Link",
    desc: "A social media app with chat, like, and post features.",
    github: "https://github.com/impriteshmishra/People-Links",
    deploy: "https://people-links.onrender.com",
    image: "/peopleLink.png",
  },
  {
    name: "CoinPlus",
    desc: "Real-time cryptocurrency tracker using ReactJS and Caching using redis.",
    github: "https://github.com/impriteshmishra/coinPlus",
    image: "/coinplus.png",
    deploy: "https://coinplus.onrender.com",
  },

  {
    name: "Expenzo",
    desc: "An expense tracker app to manage your monthly spending.",
    github:
      "https://github.com/impriteshmishra/ExpenZo-expense-manager-app-using-react-firebase",
    image: "/expenzo.png",
  },
  {
    name: "Restaurant Table Booking",
    desc: "Book tables in restaurants by selecting date, time, and guest count.",
    github:
      "https://github.com/impriteshmishra/restaurant-table-booking-nextjs",
    image: "/restaurent.png",
  },
];

function ProjectCard() {
  return (
    <section className="mt-24 px-4 md:px-8 lg:px-36 bg-white" id="projects">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        💻Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden border border-blue-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="w-full h-48 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover brightness-110 contrast-120"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
              </div>
              <div className="flex gap-3 mt-auto">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  GitHub
                </Link>
                {project.deploy && (
                  <Link
                    href={project.deploy}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    <FiExternalLink />
                    Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <MiniProjectsCard />
    </section>
  );
}

export default ProjectCard;
