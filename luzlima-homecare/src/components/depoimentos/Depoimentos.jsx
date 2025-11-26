import styles from './Depoimentos.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import DepoimentosProps from './DepoimentosProps';
import fotoCliente1 from '../../assets/img/maria-regina.jpg';
import fotoCliente2 from '../../assets/img/carlos-andrade.jpg'
import fotoCliente3 from '../../assets/img/fernanda-souza.jpg'
import fotoCliente4 from '../../assets/img/roberto-lima.jpg'
import fotoCliente5 from '../../assets/img/juliana-martins.jpg'
import fotoCliente6 from '../../assets/img/pedro-henrique.jpg'
import fotoCliente7 from '../../assets/img/ana-clara.jpg'
import fotoCliente8 from '../../assets/img/ricardo-gomes.jpg'
import { motion } from 'framer-motion';


const containerVariants = {
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
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function Depoimentos() {

    const carouselRef = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    };

    return (
        <section id="depoimentos" className={styles.depoimentos}>
            <div className={styles.container}>
                

                <motion.div 
                    className={styles.titulo}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2>O que dizem nossos clientes</h2>
                </motion.div>

                <div className={styles.carrossel}>
                    
                    <button className={`${styles.navButton} ${styles.esquerda}`} onClick={handleLeftClick}>
                        <FaChevronLeft />
                    </button>

                    <motion.div 
                        className={styles.conteudo} 
                        ref={carouselRef}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <DepoimentosProps 
                            foto={fotoCliente1}
                            nome="Maria Regina"
                            data="2 semanas atrás"
                            estrelas={5}
                            texto="A equipe da Luz & Lima foi um anjo na vida da minha mãe. O cuidado e o carinho das enfermeiras são incomparáveis. Recomendo de olhos fechados!"
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente2}
                            nome="Carlos Andrade"
                            data="1 mês atrás"
                            estrelas={5}
                            texto="Profissionais extremamente qualificados e pontuais. O atendimento domiciliar facilitou muito nossa rotina com meu pai acamado. Excelente serviço."
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente3}
                            nome="Fernanda Souza"
                            data="3 semanas atrás"
                            estrelas={5}
                            texto="Contratei o serviço de cuidador para minha avó e estamos muito satisfeitos. Eles são atenciosos, pacientes e muito educados. Nota 10!"
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente4}
                            nome="Roberto Lima"
                            data="2 meses atrás"
                            estrelas={5}
                            texto="O suporte de enfermagem foi essencial para a recuperação pós-cirúrgica do meu irmão. Gratidão a toda a equipe pelo profissionalismo."
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente5}
                            nome="Juliana Martins"
                            data="5 dias atrás"
                            estrelas={5}
                            texto="Melhor empresa de Home Care de SP! O atendimento humanizado fez toda a diferença no tratamento do meu avô."
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente6}
                            nome="Pedro Henrique"
                            data="1 semana atrás"
                            estrelas={5}
                            texto="Equipe muito ágil e prestativa. Desde o primeiro contato no WhatsApp até o atendimento presencial, tudo impecável."
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente7}
                            nome="Ana Clara"
                            data="3 meses atrás"
                            estrelas={5}
                            texto="Fiquei muito segura com os profissionais que enviaram. Técnicos muito bem treinados e educados."
                            variants={cardVariants}
                        />

                        <DepoimentosProps 
                            foto={fotoCliente8}
                            nome="Ricardo Gomes"
                            data="4 meses atrás"
                            estrelas={5}
                            texto="Serviço de extrema confiança. Deixo minha mãe sob os cuidados deles com tranquilidade absoluta."
                            variants={cardVariants}
                        />
                    </motion.div>

                    <button className={`${styles.navButton} ${styles.direita}`} onClick={handleRightClick}>
                        <FaChevronRight />
                    </button>

                </div>

            </div>
        </section>
    );
}