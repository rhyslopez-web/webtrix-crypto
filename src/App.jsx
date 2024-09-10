import DashboardSection from "./components/DashboardSection"
import FeaturesGrid from "./components/FeaturesGrid"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PoolsSection from "./components/PoolsSection"
import Ticker from "./components/Ticker"
import Faqs from "./components/Faqs"

function App() {

  return (
    <div className="bg-black flex flex-col gap-40">
      <Navbar/>
      <HeroSection/>
      {/* <Ticker/> */}
      <FeaturesGrid/>
      <DashboardSection/>
      <PoolsSection/>
      <Faqs/>
    </div>
  )
}

export default App
