import FeaturesGrid from "./components/FeaturesGrid"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Ticker from "./components/Ticker"

function App() {

  return (
    <div className="bg-black">
      <Navbar/>
      <HeroSection/>
      {/* <Ticker/> */}
      <FeaturesGrid/>
    </div>
  )
}

export default App
