import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/roobiwebdev/Day-85-AI-Powered-Article-Summarize.git",
              "_blank"
            )
          }
          className="rounded-full border border-white bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black mt-2"
        >
          GitHub ⭐
        </button>
      </nav>

      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-6xl text-center">
        Summarize Articles With
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          {" "}
          Sumz AI
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-300 sm:text-xl text-center max-w-2xl">
        Simplify your reading with Sumz AI, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
