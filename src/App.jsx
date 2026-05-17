import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import Footer from './components/Footer'
import Artisti from './components/Artisti'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
