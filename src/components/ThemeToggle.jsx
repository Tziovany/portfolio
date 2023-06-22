import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.add("animate-smoothBg");
    setInterval(() => {
      document.documentElement.classList.remove("animate-smoothBg");
    }, 700);
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleThemeMode}>
      {theme === "light" ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </button>
  );
}
