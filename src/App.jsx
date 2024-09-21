import React, { useEffect, useState } from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

const App = () => {
  const [darkmodeOn, setdarkmodeOn] = useState(() => {
    const users_prerefered_theme = localStorage.getItem("theme");
    if (users_prerefered_theme) return users_prerefered_theme;
    const uses_dark_theme = window.matchMedia(
      "(prefers-color-scheme : dark)"
    ).matches;
    return uses_dark_theme ? "dark" : "light";
  });

  const handleDarkmode = () => {
    setdarkmodeOn((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", darkmodeOn);
  }, [darkmodeOn]);

  return (
    <div className={` ${darkmodeOn} bg-white-bg relative w-full`}>
      <div className="w-[100%] h-[260px] rounded-b-2xl z-0 bg-very-pale-blue-top-bg absolute left-0"></div>
      <main className=" relative p-4 w-full font-inter z-10">
        <div className="w-full max-w-[1000px] mx-auto">
          <Top handleDarkmode={handleDarkmode} darkmodeOn={darkmodeOn} />
          <Middle />
          <Bottom />
        </div>
      </main>
    </div>
  );
};

export default App;
