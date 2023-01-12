import { useState } from "react";
import Btn from "../Button";
import List from "../list.jsx";
function Navbar() {
  const [isHam, setIsHam] = useState(false);
  function handleHamburger() {
    setIsHam(!isHam);
  }

  return (
    <div
      className={`nav_header fixed top-0 left-0 w-full bg-darkbg min-h-max h-20 flex justify-between px-14 z-20 transition-all duration-500 ${
        isHam ? "-translate-x-56 md:translate-x-0" : "translate-x-0 "
      }
      `}
    >
      <p className="self-center">
        <a className="text-basictext" href="https://github.com/turyabiswas233">
          Github
        </a>
      </p>

      {/* navbar */}
      <div className="navbar flex ">
        {/* menubar hamburger */}
        <span className={`w-fit h-auto transition-all self-center`}>
          <Btn showMenu={isHam} click={handleHamburger} />
          {/* navbar */}
        </span>
        <List />
      </div>
    </div>
  );
}

export default Navbar;
