import React, {useContext} from "react";
import { ThemeContext } from "../Context";

export default function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="max-w-full h-[50px] bg-black text-white flex justify-around items-center">
        <h1 className="text-3xl">Theme Switcher</h1>
        <button
          onClick={toggleTheme}
          className={`${theme}-theme-btn p-2 rounded-md`}
        >
          Switch Theme
        </button>
      </div>
    </>
  );
}
