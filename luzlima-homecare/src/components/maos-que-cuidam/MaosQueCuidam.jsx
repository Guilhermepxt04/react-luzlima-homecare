import style from './MaosQueCuidam.module.css'
import img from '../../assets/img/maos-que-cuidam.png'
import TopicoProps from './topicoProps'

export default function MaosQueCuidam() {

    return (
        <section className={style.maosQueCuidam}>

            <div className={style.conteudo}>
                <img src={img} alt="imagem de uma enfermeira ajoelhada na frente de uma mulher dando um copo de água" />
                <div>
                    <h2>
                        As Mãos Certas para <span>Cuidar de Quem Você Ama</span> 
                    </h2>
                    <p>
                        Mais que profissionais, somos pessoas dedicadas a cuidar. Unimos o calor humano dos nossos cuidadores à segurança da nossa enfermagem, levando acolhimento e dias mais tranquilos para sua família.
                    </p>
                </div>
            </div>

            <div className={style.topicos}>
                <TopicoProps 
                texto="Cuidado Baseado na Empatia"/>
                <TopicoProps 
                texto="Qualificação e Verificação"/>
                <TopicoProps 
                texto="Suporte da Enfermagem na Prática"/>
            </div>

        </section>
    )
}