import style from './EquipeProps.module.css'
import { motion } from 'framer-motion'

export default function EquipeProps({ cargo, texto, imagem, variants }) {
    return (
        <motion.div
            className={style.card}
            variants={variants}
            whileHover={{
                y: -10, 
                boxShadow: "0 15px 40px rgba(0, 130, 78, 0.15)", 
                transition: { duration: 0.3 } 
            }}
        >
            <div className={style.imgWrapper}>
                <img src={imagem} alt={`Foto de ${cargo}`} loading="lazy"/>
                <div className={style.cargoOverlay}>
                    <h3>{cargo}</h3>
                </div>
            </div>
            <div className={style.cardBody}>
                <p>{texto}</p>
            </div>
        </motion.div>
    )
}