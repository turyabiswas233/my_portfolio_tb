import React from "react";
import myimg from "/images/bg_cover.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

import { SiVite, SiFirebase } from "react-icons/si";
function Hero() {
  const icons = [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, SiVite, SiFirebase];
  return (
    <div className="w-full my-5">
      <section
        className="flex flex-col
       justify-center w-full items-center 
       text-black
       "
      >
        <img
          className="w-24 h-24 aspect-square rounded-full shadow-md shadow-zinc-900 -translate-y-10"
          src={myimg}
          alt=""
        />
        <article className="space-y-5 text-center">
          <h1 className="text-2xl font-bold">Turya Biswas</h1>
          <p className="uppercase">web developer</p>

          <ul
            className="rotate w-36 h-36 grid grid-cols-3 pt-4
             
            "
          >
            {icons.map((icon, id) => {
              const Icon = icon;

              return (
                <li
                  key={id}
                  className={`text-xl odd:my-7 w-fit h-fit
                  mx-auto rotate rotate-reverse ${icon == FaReact && "react"}`}
                >
                  <Icon fill="#232230dd" />
                </li>
              );
            })}
          </ul>
        </article>

        <article className="text-center my-5">
          <p>Hi, welcome to my portfolio page.</p>
          <p>
            I hope that you find the design clean and interactive. The portfolio
            outlines my skills <br /> as a web developer and a little bit about
            my personal life.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Hero;
