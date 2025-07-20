import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16 font-raleway">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">👨‍💻 About</h2>
        <div className="bg-[#fdfcf8] p-8 md:p-12 rounded-xl shadow-lg max-w-full mx-auto mt-8 border border-gray-300 font-serif">
          <p className="text-xl text-gray-800 leading-relaxed">
            I'm <span className="font-semibold text-black">Pritesh Mishra </span>
          a  passionate and self-driven developer who graduated in 2025 with a B.Tech in Electronics and Communication Engineering from I.K. Gujral Punjab Technical University, Jalandhar.
            <br />
            <br />
            My schooling was completed at P.G. Senior Secondary School, Captaingunj, Kushinagar, where I developed a strong foundation in analytical thinking and problem-solving.
            <br />
            <br />
            Although my academic background is in electronics, my interest in technology led me to the world of software development. Since then, I’ve been actively building full-stack web applications and delivering real-world solutions that focus on usability and impact.
            <br />
            <br />
           My journey began with a deep curiosity for how technology works, which gradually evolved through building real-world projects. From connecting external APIs to developing full-stack applications, I’ve gained hands-on experience across the development cycle. I enjoy designing intuitive user interfaces, diving into backend logic, and deploying stable, scalable web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
