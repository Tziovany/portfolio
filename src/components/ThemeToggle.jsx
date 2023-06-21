import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}
