import styles from './Beneficios.module.css';
import BeneficiosProps from './BeneficiosProps';
import { RiHeartAdd2Line } from "react-icons/ri";
import { FiPhone } from 'react-icons/fi';
import { PiPersonArmsSpread } from 'react-icons/pi';
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
            
        }
    }
};


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            type: "spring",
            bounce: 0.3
        }
    }
};

export default function Beneficios() {
    return (
        <section className={styles.beneficios}>
            <motion.div
                className={styles.beneficiosConteudo}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                <BeneficiosProps
                    icone={FiPhone}
                    texto="Entre em contato e tire dúvidas"
                    variants={cardVariants}
                />
                <BeneficiosProps
                    icone={PiPersonArmsSpread}
                    texto="Avaliações Clínicas Individuais"
                    variants={cardVariants}
                />
                <BeneficiosProps
                    icone={RiHeartAdd2Line}
                    texto="Equipe formada por profissionais"
                    variants={cardVariants}
                />
            </motion.div>
        </section>
    );
};