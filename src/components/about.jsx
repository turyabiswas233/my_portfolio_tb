import { useRef } from "react";
import aboutImg from "/images/about profile pic.png";

function About({ id }) {
  const about = useRef(null);
  if (typeof about !== "undefined" || typeof home !== null)
    about?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  console.log(id);

  return (
    <>
      <h1 ref={about} className=""></h1>

      <div className="w-5/6 mx-auto my-16">
        <h3
          className="relative text-4xl w-fit h-full py-4 font-bold after:absolute after:w-1/2 after:h-1.5 after:content-[''] after:bg-basicblue after:rounded-full after:-bottom-[0.8px] after:left-0 
            before:absolute before:w-full before:h-[2.5px] before:content-[''] before:bg-gray-400 before:rounded-full before:bottom-0 before:left-0
            "
        >
          About
          <span className="text-xl pl-3">me</span>
        </h3>

        <div className="flex gap-6 items-center w-4/5 mx-auto mt-10">
          {/*  */}
          <img className="w-56 h-72" src={aboutImg} alt="" />
          {/* right */}
          <section>
            <p className="text-md md:text-xl lg:text-2xl">
              Hey.. <br />I &acute;m the most besutiful man in Bangladesh. Girls
              line up behind me. but I don&acute;t care about them.Besids, Ilike
              to watch anime a lot.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
