import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if(theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        setTheme("light");
    }
    else{
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setTheme("dark");
    }
  }

  return <div>
    <button onClick={toggleTheme}>
        {theme == "dark" ? (<MdOutlineLightMode className="w-8 h-8 text-white cursor-pointer"/>) : (<MdOutlineDarkMode className="w-8 h-8 cursor-pointer text-gray-700"/>)}
    </button>
  </div>;
}

export default ThemeToggle;
