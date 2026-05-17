import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import Footer from './components/Footer'
import Artisti from './components/Artisti'
import Contact from './components/Contact'

function HomePage() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artisti" element={<Artisti />} />
        <Route path="/contatti" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
