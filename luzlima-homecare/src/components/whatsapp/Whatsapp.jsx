import Style from './Whatsapp.module.css'
import Img from '../../assets/img/logo-whatsapp.webp'

export default function Whatsapp() {
    return (
        <a 
            href="https://api.whatsapp.com/send?phone=5511943261876&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20home%20care" 
            className={Style.btWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Link para o WhatsApp">

            <img className={Style.whatsappIcon} src={Img} alt="Ícone do WhatsApp" />
            
            <div className={Style.msg}>Entre em contato</div>
        </a>
    )
}