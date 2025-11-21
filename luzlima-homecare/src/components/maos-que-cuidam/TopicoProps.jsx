import style from './TopicoProps.module.css'
import img from '../../assets/img/topicos.png'

export default function TopicoProps({texto}){
    return(

        <div className={style.topico}>
            <img src={img} alt="Simbolo de verificado com fundo verde" />
            <h3>{texto}</h3>
        </div>

    )
}