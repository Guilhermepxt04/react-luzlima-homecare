import style from './Cta.module.css';
import { motion } from 'framer-motion';

export default function Cta() {
    return (
        <section className={style.sectionCta}>

            <motion.div 
                className={style.container}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className={style.texto}>

                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Entre em contato para garantir <br />
                        cuidado especializado 24 horas
                    </motion.h2>
                </div>
                

                <motion.button 
                    className={style.botao}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    

                    whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "#004228",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a 
                        href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20garantir%20o%20cuidado%20especializado." 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Contate-nos
                    </a>
                </motion.button>
            </motion.div>
        </section>
    );
}