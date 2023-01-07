//components
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import { useEffect, useReducer, useState } from "react";
import Code from "./components/Code/code";
import Contact from "./components/Contact/Contact";

//react-icons
import { BsCodeSlash, BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiWinkSmile } from "react-icons/bi";
import Life from "./components/Life";

export function useScrollUp() {
  const [willScrollUp, setWillScrollUp] = useState(false);
  const [touchY, setTouchY] = useState(0);
  const [curY, setCurY] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (e) => {
        var scrollTop = window.scrollY;

        setCurY(scrollTop);
        if (scrollTop > 90) {
          setWillScrollUp(true);
        } else setWillScrollUp(false);
      });
      window.removeEventListener("scroll", () => {
        return;
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("touchmove", (e) => {
        let pgY = e.touches[0].clientY; //pageY == clientY
        let scY = e.touches[0].screenY; //keep in mind
        setTouchY((pgY / scY) * 100);
      });
    }
  }, []);
  return [willScrollUp, curY, touchY];
}
export const TABS = {
  LIFE: "life",
  CODE: "code",
  INTERESTS: "interests",
};

function App() {
  const [willScrollUp, curY, touchY] = useScrollUp();

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
          className={`uppercase ${
            activeTab == TABS.LIFE ? "bg-purple-600 text-white" : "text-black"
          }
        rounded-md hover:shadow-xl p-4 my-5 transition-all shadow-blue-900 flex items-center gap-2 justify-center
        
        `}
          onClick={() => dispatch({ type: TABS.LIFE, payload: TABS.LIFE })}
        >
          <BiWinkSmile /> Life
        </button>
        <button
          className={`uppercase ${
            activeTab == TABS.CODE ? "bg-purple-600 text-white" : "text-black"
          }
        rounded-md hover:shadow-xl p-4 my-5 transition-all shadow-blue-900 flex items-center gap-2 justify-center
        
        `}
          onClick={() => dispatch({ type: TABS.CODE, payload: TABS.CODE })}
        >
          <BsCodeSlash /> Code
        </button>
        <button
          className={`uppercase ${
            activeTab == TABS.INTERESTS
              ? "bg-purple-600 text-white"
              : "text-black"
          }
        rounded-md hover:shadow-xl p-4 my-5 transition-all shadow-blue-900 flex items-center gap-2 justify-center
        
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
      <div className="App font-basicfont text-darkbg dark:bg-darkbg dark:text-basictext w-full ">
        <Navbar ScrollUp={willScrollUp} />
        {/* main body */}
        <div
          className="w-full min-w-md max-w-screen-xl mx-auto
        rounded-lg bg-white shadow-md shadow-zinc-800
        "
        >
          <Hero />
          <SectionBtn />
          <div>
            {activeTab == TABS.LIFE && <Life mountMB={touchY} mountPC={curY} />}
            {activeTab == TABS.CODE && <Code />}
          </div>
          <Contact />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
