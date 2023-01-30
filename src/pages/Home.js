import style from '../styles/Home.module.css'
import Fone from '../imagens/fone.png'
import Habilidades from '../components/Habilidades'


function Home(){

    return (
    <div className={style.conteiner} id="Home">

        <h1>Habilidades</h1>

        <div id="troca2" className={style.imGG}><img  className={style.fone} src={Fone} alt="fone"/></div>

        <div className={style.l2}></div>
        <div className={style.v2}></div>
        <div id="troca3" className={style.v3}></div>
        <div className={style.l3}></div> 

        <Habilidades/> 

    </div>
    )
}

export default Home