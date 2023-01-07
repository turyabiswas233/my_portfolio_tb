import React, { useState } from "react";

function List({ scrollUp }) {
  const [showElement, setShowElm] = useState(false);
  const nav_items = [
    {
      title: "pages",
      child: {
        home: "home",
        linkedin: "LinkedIn",
      },
    },
    {
      title: "Twitter",
    },
    {
      title: "Facebook",
    },
    {
      title: "Instagram",
    },
  ];
  function hidingElement() {
    setShowElm(!showElement);
  }
  const NavItems = () => {
    return nav_items.map((element, id) => {
      let firstcondition = id == 0;
      let lastcondition = id == nav_items.length - 1;
      return (
        <li
          key={id}
          className={`p-3 cursor-default ${
            !lastcondition && "after:bg-sky-700  "
          } capitalize overflow-y-hidden relative after:bottom-0 after:left-[5%] after:absolute after:w-[90%] after:h-px md:after:bg-transparent h-fit md:w-fit w-full space-x-2`}
        >
          <p className="p-2" onClick={firstcondition ? hidingElement : null}>
            {element.title}
          </p>

          {firstcondition && showElement && (
            <ul className="md:bg-darkbg w-fit p-3 h-fit bg-transparent flex flex-col rounded-md md:shadow-md md:shadow-darkbg">
              <li className="p-3 m-auto hover:bg-cyan-300 hover:text-black text-white rounded-md transition-all w-full">
                {element?.child?.home}
              </li>
              <li className="p-3 m-auto hover:bg-cyan-300 hover:text-black text-white rounded-md transition-all w-full ">
                {element?.child?.linkedin}
              </li>
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className={`absolute md:bg-transparent bg-white dark:bg-darkbg ${
        scrollUp && "bg-white dark:bg-darkbg"
      }
     w-56 h-screen top-0
     left-full md:static md:h-full md:w-fit
     `}
    >
      <ul className={`flex flex-col md:flex-row `}>
        <NavItems />
      </ul>
    </div>
  );
}

export default List;
