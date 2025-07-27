import { Mail, Phone } from "lucide-react";
import React from "react";

const About = () => {
  const aboutData = {
    name: "Pritesh Mishra",
    title: "Software Engineer",
    location: "Captaingunj, Uttar Pradesh, India",
    email: "priteshmishra2125@gmail.com",
    phone: "+91 8299348091,  +91 7054045640",
    bio: "I am passionate and self-driven developer who graduated in 2025 with a B.Tech in Electronics and Communication Engineering from I.K. Gujral Punjab Technical University, Jalandhar. Although my academic background is in electronics, my interest in technology led me to the world of software development. Since then, I’ve been actively building full-stack web applications and delivering real-world solutions that focus on usability and impact.",
    hobbies: [
      "Reading",
      "Playing Chess",
      "Watching Documentaries",
      "Video Games",
    ],
    experience: "Fresher",
    projects: "15+ Projects",
    interests: [
      "Building Scalable Applications",
      "DevOps and Cloud Infrastructure",
      "Open Source Contributions",
    ],
  };
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16 dark:bg-gray-900 dark:text-white">
      <div className="bg-white p-8 rounded-2xl dark:bg-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-200">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 dark:text-gray-200">
                {aboutData.bio}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Hobbies</h3>
                <ul className="space-y-2 ">
                  {aboutData.hobbies.map((highlight, index) => (
                    <li key={index} className="flex items-start ">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-200">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl dark:bg-gradient-to-r dark:from-purple-900 dark:to-teal-900">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white text-gray-700 rounded-full text-sm shadow-sm dark:text-gray-200 dark:bg-gray-900 dark:font-semibold"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Mail className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{aboutData.email}</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Phone className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">{aboutData.phone}</p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
