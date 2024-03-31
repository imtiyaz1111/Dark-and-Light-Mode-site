import { useEffect, useState } from "react";
import "./App.css";
import Sport from "./components/Sport";
import Collection from "./components/Collection";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia(`(prefers-color-scheme:dark)`).matches) {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className=" bg-[#F9F8FF] dark:bg-black  py-5 ">
        <div className="flex justify-end items-start">
          <button
            className="bg-green-200 p-4 rounded-3xl mr-5 "
            onClick={handleThemeSwitch}
          >
            Dark Mode
          </button>
        </div>
        <Sport/>
        <Collection/>
      </div>
    </>
  );
}

export default App;
