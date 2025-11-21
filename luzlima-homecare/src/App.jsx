import './App.css'
import Whatsapp from './components/whatsapp/Whatsapp.jsx'
import Nav from './components/header/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Beneficios from './components/beneficios/beneficios.jsx'
import MaosQueCuidam from './components/maos-que-cuidam/MaosQueCuidam.jsx'
import Servicos from './components/servicos/Servicos.jsx'
import Equipe from './components/equipe/Equipe.jsx'
import OndeEstamos from './components/onde-estamos/OndeEstamos.jsx'
import Cta from './components/cta/Cta.jsx'
import Footer from './components/footer/Footer.jsx'
import Depoimentos from './components/depoimentos/Depoimentos.jsx'

export default function App() {

  return (
    <>

    <header>
      <Nav />
    </header>

    <main>
      <Hero />
      <Beneficios />
      <MaosQueCuidam />
      <Servicos />
      <Equipe />
      <OndeEstamos />
      <Depoimentos />
      <Cta />
    </main>

    <footer>
      <Footer />
    </footer>

    <Whatsapp />
    </>
  )
}

