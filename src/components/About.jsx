import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16 font-raleway">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">👨‍💻 About</h2>
        <div className="bg-[#fdfcf8] p-8 md:p-12 rounded-xl shadow-lg max-w-full mx-auto mt-8 border border-gray-300 font-serif">
          <p className="text-xl text-gray-800 leading-relaxed">
            I'm <span className="font-semibold text-black">Pritesh Mishra</span>
            , a curious-minded developer and a 2025 graduate from{" "}
            <span className="font-semibold text-blue-700">
              I.K. Gujral Punjab Technical University, Jalandhar
            </span>
            , where I completed my B.Tech in{" "}
            <span className="font-semibold text-blue-700">
              Electronics and Communication Engineering
            </span>
            .
            <br />
            <br />
            My academic journey began at{" "}
            <span className="font-semibold text-blue-700">
              P G Senior Secondary School, Captanganj, Kushinagar
            </span>
            , where I built my foundation by completing my 10th in 2018 and 12th
            in 2020. These years nurtured my analytical thinking and curiosity,
            laying the groundwork for my transition into tech.
            <br />
            <br />
            Although my core studies were in electronics, my passion for
            technology led me to the dynamic world of software development. I’ve
            since been deeply involved in building full-stack web applications, and deploying real-world
            solutions that make an impact.
            <br />
            <br />
           
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
