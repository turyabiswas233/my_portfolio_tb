import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/works";
import Footer from "./components/footer";
import Skill from "./components/skill";
import Aos from "aos";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  });
  const [scrollUp, setScrollUP] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("wheel", (e) => {
      setScrollUP(e.deltaY);
    });
    window.removeEventListener("wheel", () => {
      return;
    });
  }
  if (typeof window !== "undefined") {
    window.addEventListener("touchstart", (e) => {
      console.log(e.currentTarget);
    });
    window.removeEventListener("wheel", () => {
      return;
    });
  }

  return (
    <>
      <div className="App font-basicfont text-darkbg dark:bg-darkbg dark:text-basictext w-full ">
        <Navbar scrollUp={scrollUp} />
        {/* main body */}
        <div className="w-full min-w-md max-w-screen-xl mx-auto">
          <Hero />
          <About />
          <Work />
          <Skill />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
