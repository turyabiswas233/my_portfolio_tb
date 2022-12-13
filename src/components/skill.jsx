import { useState } from "react";

function Skill() {
  const [fullHide, setfullHide] = useState(false);
  const skillInfo = [
    {
      title: "xp year",
      num: 17,
    },
    {
      title: "project",
      num: 98,
    },
    {
      title: "clients",
      num: 50,
    },
    {
      title: "happy clients",
      num: 45,
    },
  ];
  return (
    <>
      <h1 id={"skill"} className="pb-10"></h1>
      <div className="w-5/6 mx-auto mt-16">
        <h3
          className="relative  text-4xl w-fit h-full pb-4 font-bold after:absolute after:w-1/2 after:h-1.5 after:content-[''] after:bg-basicblue after:rounded-full after:-bottom-[0.8px] after:left-0 
          before:absolute before:w-full before:h-[2.5px] before:content-[''] before:bg-gray-400 before:rounded-full before:bottom-0 before:left-0
          "
        >
          <span className="text-xl pr-3">My</span>
          Skills
        </h3>
        <div className=" my-10 p-5">
          <p className="text-sm">
            the ability to use one's knowledge effectively and readily in
            execution or performancedexterity or coordination especially in the
            execution of learned physical tasks a learned power of doing
            something competently a developed aptitude or ability.
          </p>
          <br />
          <br />
          <section className="animate_skill block md:grid grid-cols-2 gap-2 h-min ">
            {/* left */}
            <div
              className={`${
                fullHide ? "grid-cols-1" : "grid-cols-2"
              } gap-3 transition-all grid items-center
              ring-2 dark:ring-white ring-cyan-500 rounded-md bg-[rgba(100,200,200,0.2)] p-4 pb-16 h-fit relative `}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div
                className="rounded-lg bg-cyan-600 text-black h-auto min-h-fit p-3 overflow-y-scroll"
                data-aos="flip-left"
              >
                <h2 className="text-2xl font-bold">Graphical Skill</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid inventore soluta nostrum tempore atque non, nihil
                repudiandae neque voluptate! Corporis iure quos sint nisi iusto,
                suscipit saepe ipsum dolore placeat?
              </div>
              <div
                className="rounded-lg bg-cyan-600 text-black h-auto min-h-fit p-3 overflow-y-scroll"
                data-aos="flip-right"
              >
                <h2 className="text-2xl font-bold">Coding Skill</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid inventore soluta nostrum tempore atque non, nihil
                repudiandae neque voluptate! Corporis iure quos sint nisi iusto,
                suscipit saepe ipsum dolore placeat?
              </div>
              {/* icon */}
              <div
                className="flex justify-center mt-8 absolute
              bottom-3 w-1/2 left-1/4 "
                onClick={() => setfullHide(!fullHide)}
              >
                {fullHide ? (
                  <svg
                    className="rotate-0"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 9.5368L15.5 21.4635"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0243 15.0305C10.0243 15.0305 13.7138 9.53711 15.5002 9.53711C17.2865 9.53711 20.9702 15.0305 20.9702 15.0305"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29 15.5C29 5.37573 25.6243 2 15.5 2C5.37573 2 2 5.37573 2 15.5C2 25.6243 5.37573 29 15.5 29C25.6243 29 29 25.6243 29 15.5Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="rotate-180"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 9.5368L15.5 21.4635"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0243 15.0305C10.0243 15.0305 13.7138 9.53711 15.5002 9.53711C17.2865 9.53711 20.9702 15.0305 20.9702 15.0305"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29 15.5C29 5.37573 25.6243 2 15.5 2C5.37573 2 2 5.37573 2 15.5C2 25.6243 5.37573 29 15.5 29C25.6243 29 29 25.6243 29 15.5Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {/* right */}
            <div
              className="hidden md:block w-max mx-auto "
              data-aos={"fade-left"}
            >
              <img
                width={300}
                height={180}
                src="/images/boy-anime-artwork-u2.png"
                alt=""
              />

              <section className="grid grid-cols-2  font-bold">
                {skillInfo.map((ele) => {
                  return (
                    <div key={ele.num}>
                      <p className="text-xl">{ele.title}</p>
                      <p className="text-8xl">{ele.num}</p>
                    </div>
                  );
                })}
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Skill;
