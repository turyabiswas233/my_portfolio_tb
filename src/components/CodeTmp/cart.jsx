import React, { lazy, Suspense } from "react";
import Loading from "../../loading/loading";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Cart({ id, title, link, src }) {
  const Img = lazy(() => import("./img"));

  return (
    <motion.div
      className={`shadow-sm shadow-black/60 rounded-md p-3 space-y-4 mx-auto w-full
      ring-2 bg-gray-500/30
    ${id % 2 == 0 ? "ring-cyan-500" : "ring-pink-500"} 
`}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1.5,
        duration: 0.75 * id + 0.5,
      }}
    >
      <section className="rounded-md group overflow-hidden w-full h-4/5 relative">
        <Suspense fallback={<Loading />}>
          <Img src={src} title={title} />
        </Suspense>

        <a
          className={`text-center left-1/2 top-1/2 absolute w-fit h-fit transition-all -translate-x-1/2 -translate-y-1/2
          hover:rounded-tr-2xl hover:rounded-bl-2xl bg-darkbg/0 text-transparent px-4 py-2 group-hover:bg-darkbg/50 duration-700 z-50 
          ring-2 ring-rose-100/0 group-hover:ring-red-500/100 group-hover:text-red-200 cursor-pointer
          text-sm flex gap-2 items-center transform-cpu`}
          href={link}
          target={"_blank"}
        >
          Visit Now{" "}
          <FaArrowRight className="scale-0 group-hover:scale-100 duration-500 animate-bounce_x" />
        </a>
      </section>
      <h1 className="font-semibold text-sm md:text-xl">{title}</h1>
    </motion.div>
  );
}

export default Cart;
