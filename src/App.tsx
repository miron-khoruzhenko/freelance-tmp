import { ParallaxProvider } from "react-scroll-parallax"
import Hero, { HeroAfter } from "./components/pages/Home/1.Hero"
import Tokenomics from "./components/pages/Home/2.Tokenomics"
import Roadmap from "./components/pages/Home/3.Roadmap"
import Features from "./components/pages/Home/4.Features"

function App() {
  return (
    <ParallaxProvider>

      <div className="bg-lightBlue overflow-x-clip">
        <Hero />
        <HeroAfter />
        <Tokenomics />
        <Roadmap />
        <Features />
      </div>
    </ParallaxProvider>

  )
}

export default App
