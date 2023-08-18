import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiVite, SiFirebase, SiNextdotjs } from "react-icons/si";

function Hero() {
  const icons = [
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    SiNextdotjs,
    SiVite,
    SiFirebase,
  ];
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div className="w-full my-5" ref={heroRef}>
      <section
        className="flex flex-col
       justify-evenly items-center 
       bg-image z-10 text-slate-900 shadow-slate-800/20 shadow-2xl min-h-screen "
      >
        <article className="space-y-5 text-center z-10">
          <motion.h1
            className="text-5xl font-bold my-12 p-2"
            variants={{
              hidden: { scale: 0, x: -80 },
              visible: { scale: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
          >
            Turya Biswas
          </motion.h1>
          <motion.p
            className="uppercase"
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0,
              duration: 1,
            }}
          >
            web developer
          </motion.p>

          <motion.ul
            className=" rotate mx-auto w-36 h-36 grid grid-cols-3 pt-4"
            variants={{
              hidden: { scale: 0, x: -100 },
              visible: { scale: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              duration: 1.5,
            }}
          >
            {icons.map((icon, id) => {
              const Icon = icon;

              return (
                <li
                  key={id}
                  className="text-2xl odd:my-7 w-fit h-fit
                  mx-auto rotate rotate-reverse"
                >
                  <Icon fill="#1155ccdd" />
                </li>
              );
            })}
          </motion.ul>
        </article>

        <motion.article
          className="text-center my-5 z-10"
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          initial="hidden"
          animate="visible"
        >
          <p>Hi, welcome to my portfolio page.</p>
          <p>
            I hope that you find the design clean and interactive. The portfolio
            outlines my skills <br /> as a web developer and a little bit about
            my personal life.
          </p>
        </motion.article>
      </section>
    </motion.div>
  );
}

export default Hero;
