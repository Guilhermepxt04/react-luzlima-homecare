import style from './Nav.module.css'
import {useState, useEffect} from 'react'
import logo from '../../../public/logo.ico'

export default function Header() {

    const [menuAberto, setMenuAberto] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
            <nav className={`${style.nav} ${scrolled ? style.scrolled : ''}`}>
                <img className={style.logo} src={logo} alt="Logo da empresa, sendo 2 L juntos em tons diferentes de verdes" />
                
                <button 
                    className={`${style.hamburger} ${menuAberto ? style.aberto : ''}`} 
                    onClick={toggleMenu} 
                    aria-label="Abrir menu"
                >
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </button>

                <div className={`${style.menuNav} ${menuAberto ? style.menuAberto : ''}`}>
                    <a href="#inicio" onClick={toggleMenu}> Início </a>
                    <a href="#servicos" onClick={toggleMenu}> Serviços</a>
                    <a href="#profissionais" onClick={toggleMenu}> Nossos Profissionais</a>
                    <a href="#ondeEstamos" onClick={toggleMenu}> Onde Estamos</a>
                    <a href="#depoimentos" onClick={toggleMenu}> Depoimentos </a>
                    <button className={style.botaoContatoMobile}><a href="https://api.whatsapp.com/send?phone=5511943261876&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20home%20care" target="_blank">Contate-nos</a></button>
                </div>

                <button className={style.botaoContato}><a href="https://api.whatsapp.com/send?phone=5511943261876&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20home%20care" target="_blank">Contate-nos</a></button>


                
            </nav>
    )
}