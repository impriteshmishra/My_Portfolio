import React from "react";

import { IoCloudDownloadOutline } from "react-icons/io5";

function Resume() {
  return (
    <section className="flex justify-center items-center mt-10" id="resume">
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 text-white font-bold px-6 py-3 rounded-3xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        <IoCloudDownloadOutline  className="text-3xl text-white"/> Resume
      </a>
    </section>
  );
}

export default Resume;
