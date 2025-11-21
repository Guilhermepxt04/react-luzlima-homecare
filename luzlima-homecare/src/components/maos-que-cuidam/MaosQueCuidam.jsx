import style from './MaosQueCuidam.module.css'
import img from '../../assets/img/maos-que-cuidam.png'
import TopicoProps from './topicoProps'
import { motion } from "framer-motion";

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


const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 40 
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        }
    }
};

export default function MaosQueCuidam() {

    return (
        <section className={style.maosQueCuidam}>

            <motion.div 
                className={style.conteudo}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >

                <motion.img 
                    src={img} 
                    alt="imagem de uma enfermeira ajoelhada na frente de uma mulher dando um copo de água" 
                    variants={itemVariants} 
                />
                

                <motion.div variants={itemVariants}>
                    <h2>
                        As Mãos Certas para <span>Cuidar de Quem Você Ama</span> 
                    </h2>
                    <p>
                        Mais que profissionais, somos pessoas dedicadas a cuidar. Unimos o calor humano dos nossos cuidadores à segurança da nossa enfermagem, levando acolhimento e dias mais tranquilos para sua família.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div 
                className={style.topicos}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={itemVariants}>
                    <TopicoProps texto="Cuidado Baseado na Empatia"/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <TopicoProps texto="Qualificação e Verificação"/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <TopicoProps texto="Suporte da Enfermagem na Prática"/>
                </motion.div>
            </motion.div>

        </section>
    )
}