import './App.css'
import Whatsapp from './components/whatsapp/Whatsapp.jsx'
import Nav from './components/header/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Beneficios from './components/beneficios/beneficios.jsx'

export default function App() {

  return (
    <>

    <header>
      <Nav />
    </header>

    <main>
      <Hero />
      <Beneficios />
    </main>

    <footer>

    </footer>

    <Whatsapp />
    </>
  )
}

