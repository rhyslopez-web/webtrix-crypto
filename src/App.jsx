import DashboardSection from "./components/DashboardSection"
import FeaturesGrid from "./components/FeaturesGrid"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Ticker from "./components/Ticker"

function App() {

  return (
    <div className="bg-black flex flex-col gap-40">
      <Navbar/>
      <HeroSection/>
      <Ticker/>
      <FeaturesGrid/>
      <DashboardSection/>
    </div>
  )
}

export default App
