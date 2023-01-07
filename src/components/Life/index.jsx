import React from "react";
import ProgressBar from "../ProgressBar";

function Life({ mountMB, mountPC }) {
  const skills = [
    {
      type: "html5",
      value: 95,
    },
    {
      type: "css3",
      value: 90,
    },
    {
      type: "js",
      value: 80,
    },
    {
      type: "reactjs",
      value: 75,
    },
    {
      type: "nextjs",
      value: 75,
    },

    {
      type: "tailwindcss",
      value: 95,
    },
    {
      type: "firebase",
      value: 45,
    },
  ];
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
        <ul className="list-none flex justify-center flex-wrap w-4/5 max-w-xl mx-auto bg-darkbg/90 rounded-md p-3 shadow-lg shadow-darkbg/50 mb-4">
          {skills.map((skill, id) => {
            return (
              <li
                key={id}
                className="basis-1/3 hover:shadow-lg hover:shadow-rose-300 rounded-lg transition-shadow duration-500"
              >
                <ProgressBar
                  key={id}
                  timer={{ mountPC, mountMB }}
                  data={skill}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Life;
