import React from "react";

import { IoCloudDownloadOutline } from "react-icons/io5";

function Resume() {
  return (
    <section className="flex justify-center items-center mt-10" >
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-3xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        <IoCloudDownloadOutline  className="text-xl text-white"/> Download Resume
      </a>
    </section>
  );
}

export default Resume;
