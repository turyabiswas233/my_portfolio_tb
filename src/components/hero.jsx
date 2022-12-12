import { useState } from "react";

function Hero() {
  const [showCont, setShowCont] = useState(false);
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  function handleInput(e, replacer) {
    setdata((pre) => {
      switch (replacer) {
        case "name":
          return { ...pre, name: e };
        case "email":
          return { ...pre, email: e };
        case "phone":
          return { ...pre, phone: e };
        case "subject":
          return { ...pre, subject: e };
        case "message":
          return { ...pre, message: e };
        default:
          return { ...pre };
      }
    });
  }

  return (
    <>
      <h1 id={"home"} className="absolute top-0"></h1>

      <div className="w-4/5 justify-between mx-auto relative min-h-fit h-full grid grid-cols-1 md:grid-cols-2 gap-5 px-10 pb-24">
        {/* left top */}
        <section className=" flex flex-col md:gap-9 gap-6 my-5  ">
          <p>
            <span className="text-xl md:text-3xl font-medium text-basicyellow">
              Hello...
            </span>
            <br />
            <br />
            <span className="text-4xl md:text-6xl font-bold tracking-widest">
              I am SUJOY
            </span>
            <br />
            <span className="md:text-4xl text-2xl font-normal text-basicgreen">
              Web Designer
            </span>
          </p>
          <p className="md:text-md text-sm font-thin tracking-wider">
            Be the best version of yourself
          </p>
        </section>

        {/* right bottom */}
        <section className=" relative flex flex-col mx-auto">
          <img
            className="w-[240px]"
            src="\images\herro profile pic.png"
            alt=""
          />

          {/* icons */}
          <div className="absolute h-full w-full">
            {/* js */}
            <img
              className="absolute -top-16 -left-28 scale-[.250]"
              src={"/3d image/1.js_anim_flip.gif"}
              alt=""
            />
            {/* html */}

            <img
              className="absolute -bottom-5 md:-bottom-10 -right-24 md:-right-32 contrast-150 scale-50"
              src={"/3d image/html_logo2.gif"}
              alt=""
            />

            {/* css */}
            <img
              className="absolute -top-10 -right-32 scale-[.40]"
              src={"/3d image/1.css-anim.gif"}
              alt=""
            />
            {/* ps */}
            <img
              className="absolute bottom-3 -left-32 scale-[.34]"
              src={"/3d image/1.ps_anim.gif"}
              alt=""
            />
            <div className="flex mx-auto absolute w-4/5 left-[10%] -bottom-10 justify-evenly">
              <img src="/social icons/Facebook c.svg" alt="" />
              <img src="/social icons/Instagram c.svg" alt="" />
              <img src="/social icons/WhatsApp c.svg" alt="" />
              <img src="/social icons/Twitter c.svg" alt="" />
              <img src="/social icons/LinkedIn c.svg" alt="" />
            </div>
          </div>
        </section>

        {/* contact button */}
        <section>
          <button
            className="font-bold dark:text-basictext text-white bg-btnhover shadow-md dark:hover:shadow-white h-fit w-fit rounded-[10px] px-3 py-2  md:mx-20 transition-shadow my-16 md:my-0"
            onClick={() => {
              setShowCont(true);
            }}
          >
            Contact me
          </button>
        </section>
        {/* contact form */}
        {showCont && (
          <div
            className={`w-screen h-screen ring-2 ring-white  rounded-md bg-zinc-900 bg-opacity-40 p-24 fixed  backdrop-blur-xl left-0 top-0 z-50 ${
              showCont && "anim-pop"
            }`}
          >
            <p className="relative text-lg w-full h-auto font-light tracking-tight dark:text-orange-500 text-orange-100">
              Let&acute;s talk
              <span
                className="float-right scale-75 mr-2"
                onClick={() => {
                  setShowCont(false);
                }}
              >
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.0038 13C28.0038 13 22.9478 20.528 20.4998 20.528C18.0518 20.528 13.0038 13 13.0038 13"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 28.3848C13 28.3848 18.056 20.8568 20.504 20.8568C22.952 20.8568 28 28.3848 28 28.3848"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 20.5C2 34.374 6.626 39 20.5 39C34.374 39 39 34.374 39 20.5C39 6.626 34.374 2 20.5 2C6.626 2 2 6.626 2 20.5Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
            <h2 className="text-3xl font-bold text-orange-100">
              Have any project?
            </h2>

            <form action="" className="mt-5 z-50 max-w-screen-md mx-auto">
              <div className="w-full grid grid-cols-2 gap-3 z-50">
                <input
                  className={`contact-inp text-basictext bg-slate-900 bg-opacity-50 h-14`}
                  name={"name"}
                  type={"text"}
                  value={data.name}
                  placeholder={"Name"}
                  required
                  onChange={(e) => {
                    handleInput(e.target.value, "name");
                  }}
                />
                <input
                  className={`contact-inp text-basictext bg-slate-900 bg-opacity-50 h-14 email relative`}
                  name={"email"}
                  type={"text"}
                  value={data.email}
                  placeholder={"Email"}
                  required
                  onChange={(e) => {
                    handleInput(e.target.value, "email");
                  }}
                />
              </div>
              <div className="w-full grid grid-cols-2 gap-3 z-50">
                <input
                  className={`contact-inp text-basictext bg-slate-900 bg-opacity-50 h-14`}
                  name={"phone"}
                  type={"number"}
                  value={data.phone}
                  placeholder={"Phone Number"}
                  onChange={(e) => {
                    handleInput(e.target.value, "phone");
                  }}
                />
                <input
                  className={`contact-inp text-basictext bg-slate-900 bg-opacity-50 h-14`}
                  name={"subject"}
                  type={"text"}
                  value={data.subject}
                  placeholder={"Subject"}
                  required
                  onChange={(e) => {
                    handleInput(e.target.value, "subject");
                  }}
                />
              </div>
              <div className="w-full grid grid-cols-1 ">
                <textarea
                  className="contact-inp text-basictext bg-slate-900 bg-opacity-50 h-40 w-full"
                  placeholder={"Your Message here..."}
                  name={"message"}
                  cols="20"
                  rows="10"
                  value={data.message}
                  required
                  onChange={(e) => handleInput(e.target.value, "message")}
                ></textarea>
              </div>

              <button
                className="bg-basicgreen hover:bg-hovergreen transition-colors py-2 px-3 text-2xl rounded-md mt-5 text-basictext font-semibold"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
