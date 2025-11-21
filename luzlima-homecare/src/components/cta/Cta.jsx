import style from './Cta.module.css';

export default function Cta() {
    return (
        <section className={style.sectionCta}>
            <div className={style.container}>
                <div className={style.texto}>
                    <h2>
                        Entre em contato para garantir <br />
                        cuidado especializado 24 horas
                    </h2>
                </div>
                
                <button className={style.botao}>
                    <a 
                        href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20garantir%20o%20cuidado%20especializado." 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Contate-nos
                    </a>
                </button>
            </div>
        </section>
    );
}