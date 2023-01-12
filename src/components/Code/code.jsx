import React, { useMemo, useReducer } from "react";
import Cart from "../CodeTmp/cart";

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
    return (
      <>
        <section className="md:flex md:justify-around">
          <ul className="list-disc mx-5 my-5 pt-5">
            <li>html 5</li>
            <li>css3</li>
            <li>sass</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Vite.js</li>
          </ul>
          <ul className="list-disc mx-5 my-5 pt-5">
            <li>Bootstrap 4</li>
            <li>Animate.css</li>
            <li>Babel</li>
            <li>JSX</li>
            <li>React</li>
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
      </>
    );
  };
  const BackEnd = () => {
    return (
      <div>
        <ul className="list-disc mx-5 my-5 p-5">
          <li>Node.js</li>
          <li>Firebase</li>
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
    return;
  }, [activeTab]);
  return (
    <div className=" w-4/5 md:w-max  mx-auto py-5 ">
      <section className="w-5/6 mx-auto">
        <ul
          className="codeBtnList flex space-x-4 p-4 bg-gradient-to-tr from-purple-600
        to-purple-900 justify-between rounded-md"
        >
          <li
            className={`uppercase cursor-pointer font-bold text-center 
        p-3 rounded-md transition-colors duration-500 hover:bg-purple-500/50
        ${activeTab == TABS.frontend && "bg-purple-500/50"}
        `}
            onClick={() =>
              dispatch({ action: TABS.frontend, payload: TABS.frontend })
            }
          >
            Frontend
          </li>
          <li
            className={`uppercase cursor-pointer font-bold text-center 
        p-3 rounded-md transition-colors duration-500 hover:bg-purple-500/50
        ${activeTab == TABS.backend && "bg-purple-500/50"}
        `}
            onClick={() =>
              dispatch({ action: TABS.backend, payload: TABS.backend })
            }
          >
            backend
          </li>
          <li
            className={`uppercase cursor-pointer font-bold text-center 
        p-3 rounded-md transition-colors duration-500 hover:bg-purple-500/50
        ${activeTab == TABS.design && "bg-purple-500/50"}
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
