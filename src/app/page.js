'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Pritesh Mishra</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Full Stack Developer | MERN | IoT Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/impriteshmishra" target="_blank">
              <Github className="w-6 h-6 hover:text-blue-500 transition" />
            </Link>
            <Link href="https://linkedin.com/in/impriteshmishra" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
            </Link>
            <Link href="mailto:your.email@example.com">
              <Mail className="w-6 h-6 hover:text-blue-500 transition" />
            </Link>
          </div>
        </motion.div>

        {/* Projects Preview */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "People Link",
                desc: "A social media app with chat, like, and post features.",
                github: "https://github.com/impriteshmishra/People-Link",
              },
              {
                name: "Crypto Tracker",
                desc: "Real-time cryptocurrency tracker using ReactJS.",
                github: "https://github.com/impriteshmishra/crypto-tracker",
              },
            ].map((project) => (
              <div key={project.name} className="bg-gray-100 p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.desc}</p>
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-blue-500 font-medium hover:underline"
                >
                  View on GitHub
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
