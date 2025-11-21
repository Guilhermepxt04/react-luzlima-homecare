import style from './Footer.module.css';
import logo from '../../../public/logo.ico'; 
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, 
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={style.footer}>

            <motion.div 
                className={style.conteudo}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
    
                <motion.div className={style.coluna} variants={itemVariants}>
                    <div className={style.logoNome}>
                        <img src={logo} alt="Luz & Lima Home Care" className={style.logo} />
                        <h2>Luz & Lima <br /> Home Care</h2>
                    </div>
                    <p className={style.texto}>
                        Dedicados a oferecer cuidado humanizado e profissional no conforto do seu lar. 
                        Sua família em boas mãos, 24 horas por dia.
                    </p>
                </motion.div>

                <motion.div className={style.coluna} variants={itemVariants}>
                    <h3>Navegação</h3>
                    <ul className={style.links}>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#profissionais">Profissionais</a></li>
                        <li><a href="#ondeEstamos">Onde Atendemos</a></li>
                        <li><a href="#depoimentos">Depoimentos</a></li>
                    </ul>
                </motion.div>

                <motion.div className={style.coluna} variants={itemVariants}>
                    <h3>Fale Conosco</h3>
                    <ul className={style.contatos}>
                        <li>
                            <FaWhatsapp className={style.icones} />
                            <a 
                                href="https://api.whatsapp.com/send?phone=5511953997087" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                (11) 95399-7087
                            </a>
                        </li>
                        <li>
                            <FaEnvelope className={style.icones} />
                            <span>luzelima.homecare@gmail.com</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt className={style.icones} />
                            <span>São Paulo - SP</span>
                        </li>
                    </ul>
                </motion.div>

            </motion.div>

            <motion.div 
                className={style.copyright}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <p>&copy; {currentYear} Luz & Lima Home Care. Todos os direitos reservados.</p>
                <p>Desenvolvido com carinho.</p>
            </motion.div>
        </footer>
    );
}