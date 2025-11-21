import style from './BeneficiosProps.module.css'

export default function BeneficiosProps({icone: Icone, texto}) {

    return (
        <div className={style.card}>
            <div className={style.iconCircle}>
                {Icone && <Icone className={style.icon}/>}
            </div>
            <p className={style.cardText}>{texto}</p>
        </div>
    )
}