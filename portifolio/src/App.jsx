import './App.css'
import Contato from './assets/Contato/Contato.jsx'
import Footer from './assets/Footer/Footer.jsx'
import Hero from './assets/HeroSection/Hero.jsx'
import Nav from './assets/Nav/Nav.jsx'
import Projetos from './assets/Projetos/Projetos.jsx'
import Skills from './assets/Skills/Skills.jsx'
import Sobre from './assets/Sobre/Sobre.jsx'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
        <Footer />
      </main>

    </BrowserRouter>

  )


}

export default App
