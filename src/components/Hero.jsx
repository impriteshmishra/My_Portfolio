"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Particles from "../ReactBits/Particles";
import Resume from "./Resume";

const titleText = " 💻Full-Stack Developer & DevOps Enthusiast🚀 ";

const letterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      key={key}
      className="gap-4 relative  flex flex-col md:flex-row items-center justify-between px-6 md:px-16 s overflow-hidden w-full bg-white mt-6 sm:pt-32 pb-16 dark:bg-gray-900 dark:text-white"
      id="#/"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#2563EB", "#2563EB"]}
          particleCount={500}
          particleSpread={8}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="mt-16 md:mt-0 md:w-1/2 flex flex-col items-center justify-center text-center space-y-8 z-10">
        <Image
          src="/my_photo.jpg"
          alt="Pritesh's photo"
          width={300}
          height={300}
          className="rounded-full w-[400px] h-[400px] object-cover border-4 border-blue-500 shadow-lg"
        />
        <div className="sm:flex items-center gap-6">
          <motion.a
            href="mailto:priteshmishra2125@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:shadow-indigo-500/50 text-lg font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
            Hire Me
          </motion.a>
          <motion.a
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mb-9"
          >
            <Resume />
          </motion.a>
        </div>
      </div>

      {/* Right section */}
      <div className="text-center md:text-left space-y-6 md:w-1/2 z-10">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          👋 Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-500 poppins-regular">
            Pritesh Mishra
          </span>
        </motion.h1>

        <motion.h2
          key={key}
          className="text-2xl md:text-3xl font-semibold text-gray-700 flex flex-wrap dark:text-gray-300"
          initial="hidden"
          animate="visible"
        >
          {[...titleText].map((char, i) => (
            <motion.span key={i} custom={i} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-gray-700 text-xl font-semibold dark:text-gray-400"
        >
          “Full-stack developer focused on clean code, cloud hosting, and
          delivery pipelines.”
        </motion.p>

        <div className="flex justify-center md:justify-start gap-4">
          <motion.a
            href="https://github.com/impriteshmishra"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block p-3 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/im-priteshmishra/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block p-3 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://x.com/pritesh_misra"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block p-3 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            <FaXTwitter className="w-6 h-6 text-white" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
