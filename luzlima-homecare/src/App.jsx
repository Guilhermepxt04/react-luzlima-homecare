import { Suspense, lazy } from 'react';
import './App.css'
import Whatsapp from './components/whatsapp/Whatsapp.jsx'
import Nav from './components/header/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
const Beneficios = lazy(() => import('./components/beneficios/Beneficios.jsx'));
const MaosQueCuidam = lazy(() => import('./components/maos-que-cuidam/MaosQueCuidam.jsx'));
const Servicos = lazy(() => import('./components/servicos/Servicos.jsx'));
const Equipe = lazy(() => import('./components/equipe/Equipe.jsx'));
const OndeEstamos = lazy(() => import('./components/onde-estamos/OndeEstamos.jsx'));
const Depoimentos = lazy(() => import('./components/depoimentos/Depoimentos.jsx'));
const Cta = lazy(() => import('./components/cta/Cta.jsx'));


export default function App() {

  return (
    <>

    <header>
      <Nav />
    </header>

    <main>
      <Hero />

      <Suspense fallback={<div style={{textAlign: 'center', padding: '50px'}}>Carregando...</div>}>
        <Beneficios />
        <MaosQueCuidam />
        <Servicos />
        <Equipe />
        <OndeEstamos />
        <Depoimentos />
        <Cta />
      </Suspense>
    </main>

    <footer>
      <Footer />
    </footer>

    <Whatsapp />
    </>
  )
}

