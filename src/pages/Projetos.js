import style from '../styles/Projetos.module.css'
import LayoutProjeto from "../components/layout_projeto/LayoutProjeto";



function Projetos(){

    return (
        <>
            <div className={style.conteiner} id="Projetos">
                <LayoutProjeto/>
            </div>
        </>
        )
}

export default Projetos