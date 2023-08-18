import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaHome,
  FaPage4,
} from "react-icons/fa";
function List() {
  const [showElement, setShowElm] = useState(false);
  const nav_items = [
    {
      title: "pages",
      icon: FaPage4,
      child: {
        home: { name: "home", link: "/", icon: FaHome },
        linkedin: {
          name: "LinkedIn",
          link: "http://www.linkedin.com/in/turya-biswas-31418527b",
          icon: FaLinkedin,
        },
      },
    },

    {
      title: "Facebook",
      link: "http://facebook.com/T.biswas.012",
      icon: FaFacebook,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/turya_012/",
      icon: FaInstagram,
    },
  ];
  function hidingElement() {
    setShowElm(!showElement);
  }
  const NavItems = () => {
    return nav_items.map((element, id) => {
      let firstcondition = id == 0;
      let lastcondition = id == nav_items.length - 1;
      const Icon = element?.icon;
      return (
        <li
          key={id}
          className={`p-1 cursor-default my-1 text-basictext ${
            !lastcondition && "after:bg-sky-700 "
          } capitalize overflow-y-hidden relative after:bottom-0 after:left-[5%] after:absolute after:w-[90%] after:h-px md:after:bg-transparent h-fit md:w-fit w-full space-x-2`}
        >
          <p className="p-2" onClick={firstcondition ? hidingElement : null}>
            <a href={element?.link} target="_blank">
              <Icon />
              {element?.title}
            </a>
          </p>

          {firstcondition && showElement && (
            <ul className="md:bg-darkbg w-auto p-2 h-fit bg-transparent grid grid-cols-1 rounded-md md:shadow-md md:shadow-darkbg ">
              <li className="p-2 hover:bg-cyan-300 hover:text-black text-white rounded-md transition-all w-full mx-0">
                <a href={element?.child?.home?.link}>
                  {element?.child?.home?.name}
                </a>
              </li>
              <li className="p-2 hover:bg-cyan-300 hover:text-black text-white rounded-md transition-all w-full mx-0">
                <a href={element?.child?.linkedin?.link} target="_blank">
                  {element?.child?.linkedin?.name}
                </a>
              </li>
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className={`absolute bg-white dark:bg-darkbg 
     w-56 h-screen top-0 left-full md:static md:h-full md:w-fit
     `}
    >
      <ul className={`flex flex-col md:flex-row `}>
        <NavItems />
      </ul>
    </div>
  );
}

export default List;
