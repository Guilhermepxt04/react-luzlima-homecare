import styles from './Depoimentos.module.css';
import {FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import DepoimentosProps from './DepoimentosProps';
import fotoCliente1 from '../../assets/img/enfermeira.png';


export default function Depoimentos() {

    const carouselRef = useRef(null);


    const handleLeftClick = (e) => {
        e.preventDefault();

        carouselRef.current.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carouselRef.current.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    };

    return (
        <section id="depoimentos" className={styles.depoimentos}>
            <div className={styles.container}>
                
                <div className={styles.titulo}>
                    <h2>O que dizem nossos clientes</h2>
                </div>


                <div className={styles.carrossel}>
                    

                    <button className={`${styles.navButton} ${styles.esquerda}`} onClick={handleLeftClick}>
                        <FaChevronLeft />
                    </button>


                    <div className={styles.conteudo} ref={carouselRef}>
                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Maria de Lourdes"
                        data="2 semanas atrás"
                        texto="A equipe da Luz & Lima foi um anjo na vida da minha mãe. O cuidado e o carinho das enfermeiras são incomparáveis. Recomendo de olhos fechados!"/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Carlos Andrade"
                        data="1 mês atrás"
                        texto="Profissionais extremamente qualificados e pontuais. O atendimento domiciliar facilitou muito nossa rotina com meu pai acamado. Excelente serviço."/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Fernanda Souza"
                        data="3 semanas atrás"
                        texto="Contratei o serviço de cuidador para minha avó e estamos muito satisfeitos. Eles são atenciosos, pacientes e muito educados. Nota 10!"/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Roberto Lima"
                        data="2 meses atrás"
                        texto="O suporte de enfermagem foi essencial para a recuperação pós-cirúrgica do meu irmão. Gratidão a toda a equipe pelo profissionalismo."/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Juliana Martins"
                        data="5 dias atrás"
                        texto="Melhor empresa de Home Care de SP! O atendimento humanizado fez toda a diferença no tratamento do meu avô."/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Pedro Henrique"
                        data="1 semana atrás"
                        texto="Equipe muito ágil e prestativa. Desde o primeiro contato no WhatsApp até o atendimento presencial, tudo impecável."/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Ana Clara"
                        data="3 meses atrás"
                        texto="Fiquei muito segura com os profissionais que enviaram. Técnicos muito bem treinados e educados."/>

                        <DepoimentosProps 
                        foto={fotoCliente1}
                        nome="Ricardo Gomes"
                        data="4 meses atrás"
                        texto="Serviço de extrema confiança. Deixo minha mãe sob os cuidados deles com tranquilidade absoluta."/>
                    </div>

                    <button className={`${styles.navButton} ${styles.direita}`} onClick={handleRightClick}>
                        <FaChevronRight />
                    </button>

                </div>

            </div>
        </section>
    );
}