import styles from './Equipe.module.css';
import imgEnfermeiro from '../../assets/img/enfermeira.png';
import imgCuidadores from '../../assets/img/cuidador.png';
import imgFisio from '../../assets/img/fisioterapeuta.png';
import imgTecnico from '../../assets/img/tecnico.png'
import EquipeProps from './EquipeProps';
import { motion } from 'framer-motion';

const containerCardsVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.2    
        }
    }
};


const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Equipe() {
    return (
        <section id="profissionais" className={styles.equipe}>
            <div className={styles.conteudo}>
                

                <motion.div 
                    className={styles.titulo}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2>A Equipe que traz <br />
                        <span>paz para sua família</span>
                    </h2>
                </motion.div>

                <motion.div 
                    className={styles.cards}
                    variants={containerCardsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <EquipeProps 
                        imagem={imgEnfermeiro}
                        cargo="Enfermeiros"
                        texto="Responsáveis pelo plano de cuidados e procedimentos de alta complexidade, garantindo a supervisão técnica e segurança de toda a assistência."
                        variants={cardVariants}
                    />

                    <EquipeProps 
                        imagem={imgTecnico}
                        cargo="Técnicos de Enfermagem"
                        texto="Atuam na administração de medicamentos, curativos e monitoramento de sinais vitais, oferecendo suporte técnico contínuo e especializado."
                        variants={cardVariants}
                    />

                    <EquipeProps 
                        imagem={imgCuidadores}
                        cargo="Cuidadores"
                        texto="Focados no bem-estar e na companhia. Auxiliam nas atividades diárias, como higiene, alimentação e mobilidade, sempre com carinho e paciência."
                        variants={cardVariants}
                    />

                    <EquipeProps 
                        imagem={imgFisio}
                        cargo="Fisioterapeutas"
                        texto="Especialistas em reabilitação e movimento, atuam para restaurar a independência motora e melhorar a qualidade de vida do paciente."
                        variants={cardVariants}
                    />
                </motion.div>


                <motion.div 
                    className={styles.cta}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <button>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5511953997087&text=Gostaria%20de%20conhecer%20a%20equipe"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Escolha o melhor profissional para sua família
                        </a>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}