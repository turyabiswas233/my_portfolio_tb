import { useState } from "react";

function Navbar() {
  const [isHam, setIsHam] = useState(false);
  function handleHamburger() {
    setIsHam(!isHam);
  }
  const [load, setLoad] = useState(false);

  const resumeLink = "/ssc_bijgonit 3.pdf";

  const onButtonClick = async () => {
    // using Java Script method to get PDF file

    try {
      setLoad(true);
      await fetch(resumeLink).then((response) => {
        console.log(response);
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          console.log(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "turya_biswas_resume.pdf";

          alink.click(setLoad(false));
        });
      });
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  const Spinner = () => {
    return <div>Loading...</div>;
  };

  return (
    <div
      className={`nav_header w-full flex justify-between px-16 py-5 md:items-center sticky z-50 top-0 after:backdrop-blur-lg mx-auto mb-10 h-min  ${
        isHam ? "after:h-screen md:after:h-full" : "after:h-full"
      } after:transition-all after:duration-600 after:absolute after:w-full after:bg-red-500 after:top-0 after:left-0 after:bg-[#acf6] after:-z-20`}
    >
      <svg
        className="rootLogo"
        id="Layer_1"
        data-name="Layer 1"
        width={100}
        height={25}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 490.48"
      >
        <polygon
          className="cls-1"
          points="92.28 490.48 0 490.48 0 159.27 92.28 121.34 92.28 490.48"
        />
        <polygon
          className="cls-1"
          points="1522.07 490.48 1429.79 490.48 1429.79 159.27 1522.07 121.34 1522.07 490.48"
        />
        <path
          className="cls-1"
          d="M580,490.48H459.89L357.79,349.32l-17.72-24.46V222.47h42.68c1.14,0,2.27.09,3.46.09s2-.05,3-.09c31.1-1.69,55.76-29,55.76-62.49,0-34.61-26.3-62.64-58.78-62.64H290.75V490.48H193.41V0h236c46.44,20,83.18,54.51,102.05,97.34A162.2,162.2,0,0,1,545,152.8c4.16,66.35-32.53,127-91.05,163.35Z"
        />
        <path
          className="cls-1"
          d="M778.11,134.33A178.11,178.11,0,0,0,600,312.43c0,98.34,79.72,178.05,178.1,178.05a178.05,178.05,0,0,0,178.06-178C956.17,214.1,876.45,134.33,778.11,134.33Zm0,265.3a87.22,87.22,0,1,1,87.2-87.2A87.21,87.21,0,0,1,778.11,399.63Z"
        />
        <path
          className="cls-1"
          d="M1846.72,362.79a87.21,87.21,0,1,1-2.38-104L1919,206.92a178.07,178.07,0,0,0-321.54,105.51c0,98.34,79.71,178.05,178.1,178.05A177.83,177.83,0,0,0,1920,416.56Z"
        />
        <path
          className="cls-1"
          d="M1338.76,290.4V490.48h-92.89V276.83c-8.12-25.84-33.22-44.66-62.93-44.66s-54.76,18.82-62.88,44.66V490.48h-92.89V134.33h92.89v21.79a155.22,155.22,0,0,1,125.81-3.27C1300.43,175.53,1338.76,228.61,1338.76,290.4Z"
        />
      </svg>

      {/* navbar */}
      <div className="navbar flex relative">
        {/* menubar hamburger */}
        <button
          className="md:hidden w-10 h-10 
                 absolute right-0 -bottom-1 scale-[.40] "
          onClick={handleHamburger}
        >
          {isHam ? (
            <svg
              className="close"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_2_9)">
                <rect
                  y="40"
                  width="56.5685"
                  height="14.1421"
                  rx="7.07107"
                  transform="rotate(-45 0 40)"
                />
                <rect
                  x="10"
                  width="56.5685"
                  height="14.1421"
                  rx="7.07107"
                  transform="rotate(45 10 0)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_2_9"
                  x="2.92893"
                  y="2.92893"
                  width="44.1421"
                  height="48.1421"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 1 0 0 0 0.36 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_9"
                  />
                </filter>
              </defs>
            </svg>
          ) : (
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_2_8)">
                <rect x="0.709213" width="47" height="10" rx="7.04868" />
                <rect
                  x="0.709213"
                  y="17.9513"
                  width="47"
                  height="10"
                  rx="7.04868"
                />
                <rect y="35.9026" width="47" height="10" rx="7.04868" />
              </g>
              <defs>
                <filter
                  id="filter0_i_2_8"
                  x="0"
                  y="0"
                  width="50"
                  height="54"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 1 0 0 0 0.36 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_8"
                  />
                </filter>
              </defs>
            </svg>
          )}
        </button>
        {/* navbar list desktop*/}
        <ul className="nav-list md:flex gap-12 hidden ">
          <li className="hover:text-hovergreen transition-colors cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-hovergreen transition-colors cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-hovergreen transition-colors cursor-pointer">
            <a href="#work">Work</a>
          </li>
          <li className="hover:text-hovergreen transition-colors cursor-pointer">
            <a href="#skill">Skill</a>
          </li>
          <li className="bg-basicgreen -mt-2 p-2 dark:text-basictext text-white hover:bg-hovergreen transition-all hover:text-slate-100 rounded-[0.625rem] flex gap-2 font-bold cursor-pointer">
            Resume
            <img className="scale-75 -mt-1" src="/images/Download.svg" alt="" />
          </li>
        </ul>
      </div>
      {/* navbar list moobile*/}
      <ul
        className={`nav-list grid grid-cols-1 gap-12 
            absolute w-full left-0 md:hidden ${
              isHam
                ? "top-32 opacity-100 nav_header_mb"
                : "top-[-70vh] -z-20 hidden "
            } transition-all duration-600`}
      >
        <li
          className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem] cursor-pointer"
          onClick={handleHamburger}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem] cursor-pointer"
          onClick={handleHamburger}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem] cursor-pointer"
          onClick={handleHamburger}
        >
          <a href="#work">Work</a>
        </li>
        <li
          className="hover:bg-hovergreen w-1/3 mx-auto text-center transition-colors p-3 rounded-[0.625rem] cursor-pointer"
          onClick={handleHamburger}
        >
          <a href="#skill">Skill</a>
        </li>

        <li
          className="bg-basicgreen w-2/3 mx-auto -mt-2 p-2 dark:text-basictext text-white hover:bg-hovergreen transition-colors hover:text-slate-100 rounded-[0.625rem] cursor-pointer flex justify-center font-bold "
          onClick={onButtonClick}
        >
          Resume
          {load ? (
            <Spinner />
          ) : (
            <img
              className="scale-75 -mt-1"
              src=" /images\Download.svg"
              alt=""
            />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
