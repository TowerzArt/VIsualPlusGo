import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import CardsGrid from './components/CardsGrid/CardsGrid';
import Contact from './components/Contact/Contact';
import MissionVision from './components/MissionVision/MissionVision';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <CardsGrid />
      <MissionVision />
      <Contact />
      <Footer />
    </div>
  )
}

export default App