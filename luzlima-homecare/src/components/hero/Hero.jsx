import styles from './Hero.module.css';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2, 
            staggerChildren: 0.3 
        }
    }
};


const itemVariants = {
    hidden: { 
        opacity: 0, 
        x: -50 
    },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        }
    }
};

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <motion.div 
        className={styles.conteudo}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.h1 variants={itemVariants}>
            LUZ & LIMA
        </motion.h1>
        
        <motion.h2 variants={itemVariants}>
            HOME CARE
        </motion.h2>
        
        <motion.p className={styles.slogan} variants={itemVariants}>
            24 horas cuidando de você
        </motion.p>

        <motion.div className={styles.caixaTexto} variants={itemVariants}>
          <p>A tranquilidade que sua família precisa. Cuidado humanizado em casa e hospitais com supervisão de enfermagem profissional.</p>
        </motion.div>

        <motion.button variants={itemVariants}>
          <a href="#nossos-servicos">Conheça nossos Serviços</a>
        </motion.button>

      </motion.div>
    </section>
  );
};