import styles from './Equipe.module.css';
import imgEnfermeiro from '../../assets/img/enfermeira.png';
import imgCuidadores from '../../assets/img/cuidador.png';
import imgFisio from '../../assets/img/fisioterapeuta.png';
import imgTecnico from '../../assets/img/tecnico.png'
import EquipeProps from './EquipeProps';

export default function Equipe() {
    return (
        <section id="profissionais" className={styles.equipe}>
            <div className={styles.conteudo}>
                
                <div className={styles.titulo}>
                    <h2>A Equipe que traz <br />
                        <span>paz para sua família</span>
                    </h2>
                </div>

                <div className={styles.cards}>
                    <EquipeProps 
                    imagem={imgEnfermeiro}
                    cargo="Enfermeiros"
                    texto="Responsáveis pelo plano de cuidados e procedimentos de alta complexidade, garantindo a supervisão técnica e segurança de toda a assistência."/>

                    <EquipeProps 
                    imagem={imgTecnico}
                    cargo="Técnicos de Enfermagem"
                    texto="Atuam na administração de medicamentos, curativos e monitoramento de sinais vitais, oferecendo suporte técnico contínuo e especializado."/>

                    <EquipeProps 
                    imagem={imgCuidadores}
                    cargo="Cuidadores"
                    texto="Focados no bem-estar e na companhia. Auxiliam nas atividades diárias, como higiene, alimentação e mobilidade, sempre com carinho e paciência."/>

                    <EquipeProps 
                    imagem={imgFisio}
                    cargo="Fisioterapeutas"
                    texto="Especialistas em reabilitação e movimento, atuam para restaurar a independência motora e melhorar a qualidade de vida do paciente."/>
                </div>

                <div className={styles.cta}>
                    <button>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5511953997087&text=Gostaria%20de%20conhecer%20a%20equipe"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Escolha o melhor profissional para sua família
                        </a>
                    </button>
                </div>

            </div>
        </section>
    );
}