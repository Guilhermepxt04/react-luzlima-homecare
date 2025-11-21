import style from './BeneficiosProps.module.css'
import { motion } from 'framer-motion'


export default function BeneficiosProps({ icone: Icone, texto, variants }) {

    return (
        <motion.div
            className={style.card}
            variants={variants}
        >
            <div className={style.iconCircle}>
                {Icone && <Icone className={style.icon} />}
            </div>
            <p className={style.cardText}>{texto}</p>
        </motion.div>
    )
}