import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/works";
import DownDemo from "./components/DownDemo";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App font-basicfont text-darkbg dark:bg-darkbg dark:text-basictext w-full ">
        <Navbar />
        {/* main body */}
        <div className="w-full min-w-md max-w-screen-xl mx-auto">
          <Hero />
          <About />
          <Work />
        </div>
        <DownDemo />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
