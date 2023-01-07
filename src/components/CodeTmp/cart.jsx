import React from "react";

import { FaArrowRight } from "react-icons/fa";
function Cart({ id, title, link, src }) {
  return (
    <div
      className={`shadow-sm shadow-black/60 rounded-md p-3 space-y-4 mx-auto w-full
      
    ${
      id % 2 == 0
        ? "bg-gradient-to-tr to-orange-500"
        : "bg-gradient-to-bl to-rose-500"
    } from-purple-400
`}
    >
      <section
        className="rounded-md group overflow-hidden w-full h-4/5 relative after:absolute after:w-full after:h-0 after:transition-all after:top-0 after:left-0 after:rounded-md after:bg-darkbg/50 after:duration-500
        after:hover:h-full transform-cpu
        "
      >
        <img
          className="aspect-video mx-auto rounded-md mb-5 scale-100 transition-transform duration-700 group-hover:scale-105 "
          src={src}
          alt={title}
          width={500}
        />
        <a
          className={`text-center left-1/2 top-1/2 absolute w-fit h-fit transition-all -translate-x-1/2 -translate-y-1/2
          hover:-skew-x-6 hover:-skew-y-6 hover:rounded-tr-2xl hover:rounded-bl-2xl bg-darkbg/0 text-transparent px-4 py-2 group-hover:bg-darkbg/50 duration-700 z-50 
          ring-2 ring-rose-100/0 group-hover:ring-red-500/100 group-hover:text-red-200 cursor-pointer
          text-sm flex gap-2 items-center transform-cpu`}
          href={link}
          target={"_blank"}
        >
          Visit Now{" "}
          <FaArrowRight className="scale-0 group-hover:scale-100 duration-500 animate-bounce_x" />
        </a>
      </section>
      <h1 className="font-semibold text-xl">{title}</h1>
    </div>
  );
}

export default Cart;
