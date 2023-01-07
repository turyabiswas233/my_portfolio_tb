import React from "react";
import "./button.css";

function Btn({ showMenu, click }) {
  return (
    <>
      <button
        className={`menu-btn ${showMenu && "open"} md:invisible`}
        onClick={click}
      >
        <div className="menu-btn__burger"></div>
      </button>
    </>
  );
}

export default Btn;
