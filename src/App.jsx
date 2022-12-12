import { useReducer } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/works";
import Footer from "./components/footer";
export const HREF = {
  home: "home",
  about: "about",
  work: "work",
  skill: "skill",
};
function App() {
  const [state, dispatch] = useReducer(linkChanger, HREF.home);

  function linkChanger(state, action) {
    switch (action.type) {
      case HREF.home:
        return HREF.home;
      case HREF.home:
        return HREF.home;
      case HREF.home:
        return HREF.home;
      case HREF.home:
        return HREF.home;
      default:
        return state;
    }
  }

  return (
    <>
      <div className="App font-basicfont text-darkbg dark:bg-darkbg dark:text-basictext w-full ">
        <Navbar />
        {/* main body */}
        <div className="w-full min-w-md max-w-screen-xl mx-auto">
          {/* <MouseEffect /> */}
          <Hero id={"home"} />
          <About id={"about"} />
          <Work id={"work"} />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
