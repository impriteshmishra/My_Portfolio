import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/xyzpkjed", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    });

    setLoading(false);

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <Toaster position="top-right" />
      <div className="max-w-2xl mx-auto bg-white border border-blue-600 rounded-xl shadow-lg p-8 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 dark:text-gray-200">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300 dark:font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Peter Parker"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300 dark:font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="peter@marry.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300 dark:font-semibold">Message</label>
            <textarea
              name="message"
               placeholder="Type here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
