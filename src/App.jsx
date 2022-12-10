
import { useMenuBar } from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Work from './components/works'
import MouseEffect from "./components/mouseEffect";

function App() {
  const { Nav } = useMenuBar();

  return (
    <>
      <div className="App font-basicfont text-darkbg dark:bg-darkbg dark:text-basictext w-full pb-16">
        {Nav}
        <div className='w-full max-w-screen-xl mx-auto'>
          <MouseEffect />
          <Hero />
          <About />
          <Work />
        </div>
      </div>
    </>
  )
}

export default App
