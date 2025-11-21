import style from './OndeEstamos.module.css'

export default function OndeEstamos() {

    return (
        <section id="ondeEstamos" className={style.ondeEstamos}>

            <div className={style.conteudo}>
                <h2>
                    E Onde Atendemos? <br />
                    Em Toda a Capital de São Paulo.
                </h2>

                <iframe
                    className={style.mapa}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14376637584!2d-46.924942232801726!3d-23.682063585190413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1763674082359!5m2!1spt-BR!2sbr"
                    width="600"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Atendimento"
                ></iframe>

                <h2 className={style.tituloInferior}>
                    Levamos o Cuidado Até o Conforto do Seu Lar
                </h2>
            </div>
        </section>
    )
}