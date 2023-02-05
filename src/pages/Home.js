import style from '../styles/Home.module.css'
import Fone from '../imagens/home.jpg'
import Habilidades from '../components/Habilidades'


function Home(){

    return (
    <div className={style.conteiner} id="Home">

        <div id="troca2" className={style.imGG}><img className={style.home} src={Fone} alt="fone"/></div>

        {/* <div className={style.l2}></div>
        <div className={style.v2}></div>
        <div id="troca3" className={style.v3}></div>
        <div className={style.l3}></div>  */}

        <div><Habilidades/> </div>

    </div>
    )
}

export default Home