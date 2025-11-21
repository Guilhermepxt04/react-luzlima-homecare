import styles from './DepoimentosProps.module.css'
import { FaStar} from 'react-icons/fa';

export default function DepoimentosProps({ foto, nome, data, estrelas, texto }) {
    return (

        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.info}>

                    <img src={foto} alt={nome} className={styles.foto} />

                    <div>
                        <h3>{nome}</h3>
                        <span className={styles.data}>{data}</span>
                    </div>
                </div>
            </div>

            <div className={styles.estrelas}>
                {[...Array(estrelas)].map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>

            <p className={styles.texto}>"{texto}"</p>
        </div>
    )
}