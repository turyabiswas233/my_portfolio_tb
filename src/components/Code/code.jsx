import React, { useMemo, useReducer } from "react";
import Cart from "../CodeTmp/cart";
import { motion } from "framer-motion";
export const TABS = {
  frontend: "frontend",
  backend: "backend",
  design: "design",
};
// data in json format
const frontend_data = [
  {
    link: "https://tb-todo-app.vercel.app/",
    title: "Todo App",
    src: "/images/todo.png",
  },
  {
    link: "https://tb-edie-homepage.netlify.app/",
    title: "Edie Homepage by DevChallenges.io",
    src: "/images/edie.png",
  },

  {
    link: "https://tb-nav-test.netlify.app/",
    title: "Next_JS routing test",
    src: "/images/next.png",
  },
  {
    link: "https://project-21-joy.vercel.app/",
    title: "Project Joy 2022",
    src: "/images/joy-project.png",
  },
  {
    link: "https://turyabiswas233.github.io/my-team-page-master/",
    title: "Team Page Gallery",
    src: "/images/gallery.png",
  },
  {
    link: "https://turyabiswas233.github.io/recipe-page/",
    title: "A Recipe Page",
    src: "/images/cake.png",
  },
];
const backend_data = [
  {
    title: "My chat app",
    link: "https://tb-chat-app.vercel.app/",
    src: "/images/chatapp.png",
  },
];

function Code() {
  const [activeTab, dispatch] = useReducer(reducer, TABS.frontend);

  function reducer(action, state) {
    switch (action.type) {
      case TABS.frontend:
        return state.payload;
      case TABS.backend:
        return state.payload;
      case TABS.design:
        return state.payload;
      default:
        return state.payload;
    }
  }
  const FrontEnd = () => {
    const skillAr = [
      "html5",
      "css3",
      "raectjs",
      "nextjs",
      "vitejs",
      "bootstrap",
      "framer-motion",
      "jsx",
    ];
    return (
      <div className="max-w-4xl">
        <section className="md:flex md:justify-evenly">
          <ul className="list-none grid grid-cols-2 xl:grid-cols-3 m-5 pt-5">
            {skillAr.map((skill, id) => {
              return (
                <motion.li
                  className="p-4"
                  variants={{
                    hidden: { opacity: 0, x: -25, y: 15 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      backgroundColor: "skyblue",
                      margin: "2pt",
                      borderRadius: 15,
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 1 + 0.5 * id,
                    duration: 0.55,
                  }}
                >
                  {skill}
                </motion.li>
              );
            })}
          </ul>
        </section>

        <div className="w-11/12 gap-3 grid grid-cols-1 md:grid-cols-2 mx-auto">
          {frontend_data.map((value, id) => {
            return (
              <Cart
                key={id}
                title={value.title}
                link={value.link}
                id={id}
                src={value.src}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const BackEnd = () => {
    const skillAr = ["nodejs", "expressjs", "firebase"];
    return (
      <div>
        <ul className="list-none  m-5 p-5 grid grid-cols-2">
          {skillAr.map((skill, id) => {
            return (
              <motion.li
                className="p-4"
                variants={{
                  hidden: { opacity: 0, x: -25, y: 15 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    backgroundColor: "skyblue",
                    margin: "2pt",
                    borderRadius: 15,
                  },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 1 + 0.5 * id,
                  duration: 0.55,
                }}
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
        <div className="w-11/12 gap-3 grid grid-cols-1 md:grid-cols-2 mx-auto">
          {backend_data.map((value, id) => {
            return (
              <Cart
                key={id}
                title={value.title}
                link={value.link}
                id={id}
                src={value.src}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const codeCart = useMemo(() => {
    if (activeTab == TABS.frontend) return <FrontEnd />;
    if (activeTab == TABS.backend) return <BackEnd />;
    else
      return (
        <>
          <div className="w-full min-w-[50vw] text-center p-20 font-bold">
            Nothing to show
          </div>
        </>
      );
  }, [activeTab]);
  return (
    <div className=" w-4/5 md:w-max  mx-auto py-5 ">
      <section className="w-5/6 mx-auto">
        {/* codeBtnList */}
        <ul
          className="flex md:space-x-4 p-4 bg-gradient-to-tr from-purple-900
        to-purple-400 justify-between rounded-md w-fit container mx-auto contrast-150"
        >
          <li
            className={`uppercase cursor-pointer font-bold text-center 
        p-3 rounded-md transition-colors duration-500 hover:bg-purple-500
        ${activeTab == TABS.frontend && "bg-purple-500"}
        `}
            onClick={() =>
              dispatch({ action: TABS.frontend, payload: TABS.frontend })
            }
          >
            Frontend
          </li>
          <li
            className={`uppercase cursor-pointer font-bold text-center 
        p-3 rounded-md transition-colors duration-500 hover:bg-purple-500
        ${activeTab == TABS.backend && "bg-purple-500 "}
        `}
            onClick={() =>
              dispatch({ action: TABS.backend, payload: TABS.backend })
            }
          >
            backend
          </li>
          <li
            className={`uppercase cursor-pointer font-bold text-center 
        p-3 rounded-md transition-colors duration-500 hover:bg-purple-500
        ${activeTab == TABS.design && "bg-purple-500 "}
        `}
            onClick={() =>
              dispatch({ action: TABS.design, payload: TABS.design })
            }
          >
            design
          </li>
        </ul>
      </section>
      <section
        className="text-black uppercase 
      shadow-sm shadow-black/60 p-4 translate-y-[-30px] space-y-5"
      >
        {codeCart}
      </section>
    </div>
  );
}

export default Code;
