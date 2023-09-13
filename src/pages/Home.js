import style from '../styles/Home.module.css'
import Fone from '../imagens/home.jpg'
import Habilidades from '../components/Habilidades'


function Home(){

    return (
    <div className={style.conteiner} id="Home">

        <div id="troca2" className={style.imagemHome}><img className={style.home} src={Fone} alt="fone"/></div>

        <div className={style.habilidades}><Habilidades/> </div>

    </div>
    )
}

export default Home