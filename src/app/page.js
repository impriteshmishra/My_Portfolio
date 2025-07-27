'use client'

import React from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/Hero"
import About from '@/components/About';
import Skills from "@/components/Skills"
import ProjectCard from "@/components/ProjectCard"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"




export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <ProjectCard />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
