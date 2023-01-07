import { useState } from "react";
import Btn from "../Button";
import List from "../list.jsx";
function Navbar({ ScrollUp }) {
  const [isHam, setIsHam] = useState(false);
  function handleHamburger() {
    setIsHam(!isHam);
  }

  return (
    <div
      className={`nav_header w-full min-h-max h-20 flex justify-between px-14  sticky z-50 top-0 transition-all duration-500 ${
        ScrollUp ? "bg-darkbg shadow-md shadow-zinc-400" : "bg-transparent"
      } relative ${
        isHam ? "-translate-x-56 md:translate-x-0" : "translate-x-0 "
      }
      `}
    >
      <p className="self-center">
        <a href="https://github.com/turyabiswas233">Github</a>
      </p>

      {/* navbar */}
      <div className="navbar flex">
        {/* menubar hamburger */}
        <span className={`w-fit h-auto transition-all self-center`}>
          <Btn showMenu={isHam} click={handleHamburger} />
          {/* navbar */}
        </span>
        <List scrollUp={ScrollUp} />
      </div>
    </div>
  );
}

export default Navbar;
