function Footer() {
  return (
    <footer className=" text-gray-600 p-6 mt-16">
      <div className=" ">
        <div className=" ">
          {/* icon */}
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
          {/* icon */}
          <br />
          <div className="footerLinkList mb-9 md:flex justify-between md:w-2/5 mx-auto px-3 md:p-0">
            <section>
              <ul>
                <li>
                  <a href="https://vitejs.dev" target={"_blank"}>
                    ViteJS
                  </a>
                </li>
                <li>
                  <a href="https://reactjs.org" target={"_blank"}>
                    ReactJS
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com" target={"_blank"}>
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <ul>
                <li>
                  <a href="https://github.com" target={"_blank"}>
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://vercel.com" target={"_blank"}>
                    Vercel
                  </a>
                </li>
                <li>
                  <a href="https://figma.com" target={"_blank"}>
                    Figma
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <br />
      </div>
      <p
        className="absolute bg-basictext bg-opacity-20 w-full text-sm md:text-md text-center py-4 mx-auto left-0 bottom-0 text-black dark:text-opacity-50
      dark:text-basictext
      "
      >
        Copyright © 2022-present iRonic.inc All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
