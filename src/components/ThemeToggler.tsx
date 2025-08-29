import {LaptopMinimal, Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(false);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setSystemTheme = () => {
    setIsSystemTheme(true);

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <>
      <div className=" dark:bg-[#1d202a] bg-[#f2f2f3] dark:text-white/80 text-black flex justify-center items-center gap-2 border-2 border-[#ffffff]/10 rounded-full px-2 py-1 transition-all duration-200">
        <div
          onClick={() => {
            setIsSystemTheme(false);
            setTheme("dark");
          }}
          className={`${
            theme === "dark" &&
            !isSystemTheme &&
            "bg-[#364153] p-1 rounded-full border  border-gray-500"
          }`}
        >
          <Sun strokeWidth={2} size={17} />
        </div>
        <div
          onClick={() => {
            setIsSystemTheme(false);
            setTheme("light");
          }}
          className={`${
            theme === "light" &&
            !isSystemTheme &&
            "bg-[#ffffff] p-1 rounded-full border border-gray-400"
          }`}
        >
          <Moon strokeWidth={2} size={17} />
        </div>
        <div
          onClick={() => {
            setSystemTheme();
          }}
          className={`${
            isSystemTheme
              ? theme === "light"
                ? "bg-[#ffffff] p-1 rounded-full border border-gray-400"
                : "bg-[#364153] p-1 rounded-full border  border-gray-500"
              : null
          }`}
        >
          <LaptopMinimal strokeWidth={2} size={17} />
        </div>
      </div>
    </>
  );
};

export default ThemeToggler;
