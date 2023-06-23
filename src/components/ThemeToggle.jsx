import { useEffect, useState } from "react";

import sunIcon from "../assets/sun-icon.svg";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.add("animate-smoothBg");
    setInterval(() => {
      document.documentElement.classList.remove("animate-smoothBg");
    }, 700);
  };

  useEffect(() => {
    if (
      theme == "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleThemeMode}>
      {theme === "light" ? (
        <i className="fa-solid fa-moon bg-black text-[#1c93dc] p-1 rounded w-7 "></i>
      ) : (
        <i className="fa-solid fa-sun bg-[#1c93dc] dark:text-black p-1 rounded w-7"></i>
      )}
    </button>
  );
}
