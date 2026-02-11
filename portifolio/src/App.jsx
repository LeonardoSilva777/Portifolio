import './App.css'
import Contato from './assets/Contato/Contato.jsx'
import Hero from './assets/HeroSection/Hero.jsx'
import Nav from './assets/Nav/Nav.jsx'
import Projetos from './assets/Projetos/Projetos.jsx'
import Skills from './assets/Skills/Skills.jsx'
import Sobre from './assets/Sobre/Sobre.jsx'
function App() {
  return(
    <main>
      <Nav />
      <Hero/>
      <Sobre/>
      <Projetos/>
      <Skills/>
      <Contato />
    </main>
    
  )
    

}

export default App
