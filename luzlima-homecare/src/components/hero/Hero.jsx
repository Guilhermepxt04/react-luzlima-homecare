
import styles from './Hero.module.css';


export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.conteudo}>
        <h1>LUZ & LIMA</h1>
        <h2>HOME CARE</h2>
        <p className={styles.slogan}>24 horas cuidando de você</p>

        <div className={styles.caixaTexto}>
          <p>A tranquilidade que sua família precisa. Cuidado humanizado em casa e hospitais com supervisão de enfermagem profissional.</p>
        </div>

        <button>
          <a href="#nossos-servicos">Conheça nossos Serviços</a>
        </button>
      </div>
    </section>
  );
};
