import styles from './Servicos.module.css'
import img1 from '../../assets/img/primeira-linha-servicos.png'
import ServicosProps from './ServicosProps'
import { motion } from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.1
        }
    }
};


const cardLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


const cardRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.6, ease: "backOut" } 
    }
};

export default function Servicos() {

    return (

        <section id="servicos" className={styles.servicos}>
            <motion.div 
                className={styles.conteudo}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} 
            >

                <div className={styles.titulo}>
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ once: true, duration: 0.5 }}
                    >
                        Nossos Serviços
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Cuidados personalizados.<br />
                        Do atendimento diário em casas e hospitais<br />
                        ao suporte técnico de enfermagem para o bem-estar do paciente
                    </motion.p>
                </div>

   
                <div className={styles.cards}>

                    <div className={styles.colEsquerda}>
                        <ServicosProps 
                            titulo="Atendimento Domiciliar e Hospitalar"
                            texto="Oferecemos assistência completa, no conforto do seu lar ou no acompanhamento em hospitais"
                            variants={cardLeftVariants} 
                        />
                        <ServicosProps 
                            titulo="Atendimento Humanizado"
                            texto="Profissionais treinados para oferecer atenção, carinho, cuidado e respeito."
                            variants={cardLeftVariants}
                        />
                    </div>


                    <motion.div 
                        className={styles.imgCentral}
                        variants={imageVariants}
                    >
                        <img src={img1} alt="Enfermeira cuidando de uma senhora idosa" loading="lazy"/>
                    </motion.div>

                    <div className={styles.colDireita}>
                        <ServicosProps 
                            titulo="Suporte de Enfermagem"
                            texto="Contamos com enfermeiros para cuidados especiais, quando necessário."
                            variants={cardRightVariants}
                        />
                        <ServicosProps 
                            titulo="Apoio à família"
                            texto="Damos suporte aos familiares sobre procedimentos e informações úteis."
                            variants={cardRightVariants}
                        />
                    </div>
                </div>


                <motion.div 
                    className={styles.cta}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{once:true, delay: 0.4, duration: 0.5 }}
                >
                    <h3>Sua família merece atenção 24 horas</h3>
                    <button>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20agendar%20um%20serviço"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agende agora o melhor para você
                        </a>
                    </button>
                </motion.div>

            </motion.div>
        </section>
    )
}