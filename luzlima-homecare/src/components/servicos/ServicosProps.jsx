import style from './ServicosProps.module.css'
import { motion } from 'framer-motion'


export default function ServicosProps({titulo, texto, variants}){
    return(
        <motion.div 
            className={style.card}
            variants={variants} 
        >
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </motion.div>
    )
}