import style from './Logo.module.css'

function Logo (){
    
    return (

        <div className={style.container}>
            <div className={style.w}>W</div>
            <div className={style.linha}></div>
            <div className={style.llinha}></div>
            <div className={style.s}>S</div>
            <h1 className={style.nome}>WENNED SILVA</h1>
        </div>
    )
}

export default Logo