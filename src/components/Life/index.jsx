import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const skills = [
  {
    type: "html5",
    value: 95,
    color: "bg-red-400/25",
    pro_color: "bg-red-500",
  },
  {
    type: "css3",
    value: 90,
    color: "bg-sky-400/25",
    pro_color: "bg-sky-500",
  },
  {
    type: "js",
    value: 80,
    color: "bg-orange-400/25",
    pro_color: "bg-orange-500",
  },
  {
    type: "reactjs",
    value: 75,
    color: "bg-blue-400/25",
    pro_color: "bg-blue-500",
  },
  {
    type: "nextjs",
    value: 75,
    color: "bg-slate-400/25",
    pro_color: "bg-slate-500",
  },

  {
    type: "tailwindcss",
    value: 95,
    color: "bg-cyan-400/25",
    pro_color: "bg-cyan-500",
  },
  {
    type: "firebase",
    value: 45,
    color: "bg-yellow-400/25",
    pro_color: "bg-yellow-500",
  },
];

function Life() {
  const skillref = useRef(null);
  const isInView = useInView(skillref, { once: true });

  const maincontrols = useAnimation();
  useEffect(() => {
    if (isInView) {
      // fire the animation
      maincontrols.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <section>
        <h2
          className="text-center font-bold text-white
        underline
        "
        >
          skills
        </h2>
        <ul
          ref={skillref}
          className="list-none grid grid-cols-1 w-4/5 max-w-xl mx-auto bg-darkbg/70 rounded-md p-3 shadow-lg shadow-darkbg/50 mb-4"
        >
          {skills.map((skill, id) => {
            return (
              <motion.li
                key={id}
                className={`rounded-lg ${skill.color} bg-opacity-70 my-2 p-2 text-black relative
                z-10`}
                aria-value={skill.value}
                variants={{
                  hidden: { opacity: 0, width: 0 },
                  visible: { opacity: 1, width: "100%" },
                }}
                initial="hidden"
                animate={maincontrols}
                transition={{
                  delay: 0.5 * (id + 1),
                  duration: 0.5,
                }}
              >
                <span className="uppercase z-0 font-bold">{skill.type}</span>
                <motion.span
                  className={`absolute -z-10 ${skill.pro_color} h-full font-bold top-0 left-0 rounded-lg
                  text-right p-2 
                  `}
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    visible: { opacity: 1, width: `${skill.value}%` },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.5 * (id + 1),
                    duration: 1,
                  }}
                >
                  {skill.value}%
                </motion.span>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Life;
