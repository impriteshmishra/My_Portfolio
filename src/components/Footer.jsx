import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 dark:bg-gray-950 dark:text-gray-300 py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">Pritesh Mishra</h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/impriteshmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/im-priteshmishra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/pritesh_misra"
            target="_blank"
            className="hover:text-white"
          >
            <FaXTwitter/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
