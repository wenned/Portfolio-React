import {FaJs, FaHtml5, FaCss3, FaLink} from 'react-icons/fa'
import style from './InfoProjeto.module.css'
import portifolioImg from '../../imagens/portifolio.png';



function InfoProjeto(){

    const Falin = () =>{
        window.open('https://portfoliowenned.netlify.app/', '_blank')
    }

    return(

        <div className={style.Container}>
                
            <div className={style.imagemProjeto}><img src={portifolioImg} alt='portifolio'/></div>

            <div className={style.contSecundario} id='secod'>

                <h1>Tecnologias Usadas:</h1>

                <div className={style.skils}>
                    <div><FaJs/>: JavaScript</div>
                    <div><FaHtml5/>: Hypertext Markup Language</div>
                    <div><FaCss3/>: Cascading Style Sheets</div>
                </div>

                <div className={style.texto}>
                    <p>"Primeiro projeto web desenvolvido com JavaScript, HTML e CSS puro, desenvolvido como trabalho para a faculdade, em aperfeiçoamento das habilidades, migrei o mesmo para React."</p>
                </div>

                <div className={style.link}><FaLink onClick={Falin}/> <p onClick={Falin}>: https://portfoliowenned.netlify.app/</p></div>

            </div>
        </div>     
    )
};

export default InfoProjeto;