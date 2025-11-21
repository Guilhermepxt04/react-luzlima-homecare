import styles from './Beneficios.module.css';
import BeneficiosProps from './BeneficiosProps';
import { RiHeartAdd2Line } from "react-icons/ri";
import { FiPhone } from 'react-icons/fi';
import { PiPersonArmsSpread } from 'react-icons/pi';

export default function Beneficios() {
    return (
        <section className={styles.beneficios}>
            <div className={styles.beneficiosConteudo}>
                <BeneficiosProps 
                    icone={FiPhone}
                    texto="Entre em contato e tire dúvidas"
                />

                <BeneficiosProps 
                    icone={PiPersonArmsSpread}
                    texto="Avaliações Clínicas Individuais"
                />

                <BeneficiosProps 
                    icone={RiHeartAdd2Line}
                    texto="Equipe formada por profissionais"
                />
            </div>
        </section>
    );
};