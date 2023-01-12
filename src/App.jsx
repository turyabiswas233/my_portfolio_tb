import { useEffect, useReducer, useState, lazy, Suspense } from "react";
//react-icons
import { BsCodeSlash, BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiWinkSmile } from "react-icons/bi";

//components
import Navbar from "./components/Navbar/navbar";
import Loading from "./loading/loading";
import Life from "./components/Life";
import Code from "./components/Code/code";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";

//lazy components
const Hero = lazy(() => import("./components/Hero/hero"));

export function useScrollUp() {
  const [willScrollUp, setWillScrollUp] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (e) => {
        var scrollTop = window.scrollY;

        if (scrollTop > 90) {
          setWillScrollUp(true);
        } else setWillScrollUp(false);
      });
      window.removeEventListener("scroll", () => {
        return;
      });
    }
  }, []);

  return [willScrollUp];
}
export const TABS = {
  LIFE: "life",
  CODE: "code",
  INTERESTS: "interests",
};

function App() {
  const [willScrollUp] = useScrollUp();

  const [activeTab, dispatch] = useReducer(reducer, TABS.LIFE);

  function reducer(action, state) {
    switch (action.type) {
      case TABS.LIFE:
        return state.payload;
      case TABS.CODE:
        return state.payload;
      case TABS.INTERESTS:
        return state.payload;
      default:
        return state.payload;
    }
  }
  const SectionBtn = () => {
    return (
      <div className="grid grid-cols-3 gap-4 mx-auto w-fit justify-between">
        <button
          className={`uppercase text-sm md:text-xl ${
            activeTab == TABS.LIFE ? "shadow-xl text-darkbg" : ""
          }
        rounded-md hover:shadow-xl p-4 my-5 transition-all shadow-darkbg/50 flex items-center gap-2 justify-center
        
        `}
          onClick={() => dispatch({ type: TABS.LIFE, payload: TABS.LIFE })}
        >
          <BiWinkSmile /> Life
        </button>
        <button
          className={`uppercase text-sm md:text-xl ${
            activeTab == TABS.CODE ? "shadow-xl text-darkbg" : ""
          }
        rounded-md hover:shadow-xl p-4 my-5 transition-all shadow-darkbg/50 flex items-center gap-2 justify-center
        
        `}
          onClick={() => dispatch({ type: TABS.CODE, payload: TABS.CODE })}
        >
          <BsCodeSlash /> Code
        </button>
        <button
          className={`uppercase text-sm md:text-xl ${
            activeTab == TABS.INTERESTS ? "shadow-xl text-darkbg" : ""
          }
        rounded-md hover:shadow-xl p-4 my-5 transition-all shadow-darkbg/50 flex items-center gap-2 justify-center
        
        `}
          onClick={() =>
            dispatch({ type: TABS.INTERESTS, payload: TABS.INTERESTS })
          }
        >
          <BsFillJournalBookmarkFill /> Interests
        </button>
      </div>
    );
  };
  return (
    <>
      <div
        className="App font-basicfont w-full 
      overflow-x-hidden"
      >
        <Navbar ScrollUp={willScrollUp} />
        {/* main body */}
        <div
          className="w-full  min-h-screen min-w-md max-w-screen-xl mx-auto text-basictext
        "
        >
          <Suspense fallback={<Loading />}>
            <Hero />

            <SectionBtn />
            <div>
              {activeTab == TABS.LIFE && <Life />}
              {activeTab == TABS.CODE && <Code />}
            </div>
            <Contact />
          </Suspense>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
