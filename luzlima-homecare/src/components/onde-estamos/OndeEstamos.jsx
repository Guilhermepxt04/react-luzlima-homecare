import style from './OndeEstamos.module.css'
import { motion } from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, 
            delayChildren: 0.1
        }
    }
};


const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function OndeEstamos() {

    return (
        <section id="ondeEstamos" className={style.ondeEstamos}>

            <motion.div 
                className={style.conteudo}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} 
            >
                <motion.h2 variants={textVariants}>
                    E Onde Atendemos? <br />
                    Em Toda a Capital de São Paulo.
                </motion.h2>

                <motion.iframe
                    variants={mapVariants}
                    className={style.mapa}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14376637584!2d-46.924942232801726!3d-23.682063585190413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1763674082359!5m2!1spt-BR!2sbr"
                    width="600"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Atendimento"
                />

                <motion.h2 
                    className={style.tituloInferior}
                    variants={textVariants}
                >
                    Levamos o Cuidado Até o Conforto do Seu Lar
                </motion.h2>
            </motion.div>
        </section>
    )
}