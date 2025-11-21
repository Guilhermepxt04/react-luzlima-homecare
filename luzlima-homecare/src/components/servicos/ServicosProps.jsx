import style from './ServicosProps.module.css'

export default function ServicosProps({titulo, texto}){
    return(

        <div className={style.card}>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>

    )
}