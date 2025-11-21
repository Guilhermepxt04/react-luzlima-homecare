import styles from './Servicos.module.css'
import img1 from '../../assets/img/primeira-linha-servicos.png'
import ServicosProps from './ServicosProps'



export default function Serviços() {

    return (

        <section id="servicos" className={styles.servicos}>
            <div className={styles.conteudo}>

                <div className={styles.titulo}>
                    <h2>Nossos Serviços</h2>
                    <p>
                        Cuidados personalizados.<br />
                        Do atendimento diário em casas e hospitais<br />
                        ao suporte técnico de enfermagem para o bem-estar do paciente
                    </p>
                </div>

   
                <div className={styles.cards}>


                    <div className={styles.colEsquerda}>
                        <ServicosProps 
                        titulo="Atendimento Domiciliar e Hospitalar"
                        texto="Oferecemos assistência completa, no conforto do seu lar ou no acompanhamento em hospitais"/>
                        <ServicosProps 
                        titulo="Atendimento Humanizado"
                        texto="Profissionais treinados para oferecer atenção, carinho, cuidado e respeito."/>
                    </div>

                    <div className={styles.imgCentral}>
                        <img src={img1} alt="Enfermeira cuidando de uma senhora idosa" />
                    </div>

                    <div className={styles.colDireita}>
                        <ServicosProps 
                        titulo="Suporte de Enfermagem"
                        texto="Contamos com enfermeiros para cuidados especiais, quando necessário."/>
                        <ServicosProps 
                        titulo="Apoio à família"
                        texto="Damos suporte aos familiares sobre procedimentos e informações úteis."/>
                    </div>
                </div>

                <div className={styles.cta}>
                    <h3>Sua família merece atenção 24 horas</h3>
                    <button>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20agendar%20um%20serviço"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agende agora o melhor para você
                        </a>
                    </button>
                </div>

            </div>
        </section>
    )

}