import styles from './DepoimentosProps.module.css'
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DepoimentosProps({ foto, nome, data, estrelas = 5, texto, variants }) {
    return (
        <motion.div 
            className={styles.card}
            variants={variants} 
            whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px rgba(0, 130, 78, 0.15)",
                transition: { duration: 0.3 }
            }}
        >
            <div className={styles.cardHeader}>
                <div className={styles.info}>

                    <img src={foto} alt={nome} className={styles.foto} loading="lazy"/>

                    <div>
                        <h3>{nome}</h3>
                        <span className={styles.data}>{data}</span>
                    </div>
                </div>
            </div>

            <div className={styles.estrelas}>
                {[...Array(Number(estrelas) || 5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>

            <p className={styles.texto}>"{texto}"</p>
        </motion.div>
    )
}