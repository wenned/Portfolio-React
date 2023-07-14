import style from './Logo.module.css'

function Logo (){
    
    return (

        <div className={style.container}>
            <div className={style.circulo}>
                <div className={style.ws}>WS</div>
            </div>
            <h1 className={style.nome}>WENNED SILVA</h1>
        </div>
    )
}

export default Logo