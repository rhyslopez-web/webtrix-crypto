import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Ticker from "./components/Ticker"

function App() {

  return (
    <div className="bg-black">
      <Navbar/>
      <HeroSection/>
      <Ticker/>
    </div>
  )
}

export default App
