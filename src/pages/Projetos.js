import style from '../styles/Projetos.module.css'
import LayoutProjeto from "../components/layout_projeto/LayoutProjeto";



function Projetos(){

    return (
        <div className={style.Conteiner}>
            <div className={style.conteinerProjetos} id="Projetos">
                <LayoutProjeto/>
            </div>
        </div>
        )
}

export default Projetos