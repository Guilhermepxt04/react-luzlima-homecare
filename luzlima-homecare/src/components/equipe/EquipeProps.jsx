import style from './EquipeProps.module.css'

export default function EquipeProps({ cargo, texto, imagem }) {
    return (

        <div className={style.card}>
            <div className={style.imgWrapper}>
                <img src={imagem} alt={`Foto de ${cargo}`} />
                <div className={style.cargoOverlay}>
                    <h3>{cargo}</h3>
                </div>
            </div>
            <div className={style.cardBody}>
                <p>{texto}</p>
            </div>
        </div>



    )
}