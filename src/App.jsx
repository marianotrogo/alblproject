import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HeroSecction from "./components/HeroSecction"
import Marcas from "./components/Marcas"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSecction />
        <Features />
        <Marcas />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App