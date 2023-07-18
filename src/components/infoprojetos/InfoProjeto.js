import {FaJs, FaHtml5, FaCss3, FaLink} from 'react-icons/fa'
import style from './InfoProjeto.module.css'


function InfoProjeto(){

    const Falin = () =>{
        window.open('https://portfoliowenned.netlify.app/', '_blank')
    }

    return(

        <div className={style.Container}>
            <div className={style.imagemProjeto}></div>


            <div>            
                <h1>Tecnologias Usadas:</h1>

                <div><FaJs/>: JavaScript</div>
                <div><FaHtml5/>: Hypertext Markup Language</div>
                <div><FaCss3/>: Cascading Style Sheets</div>
                <div>
                    <p>"Primeiro projeto web desenvolvido com JavaScript, HTML e CSS puro, desenvolvido como trabalho para a faculdade, em aperfeiçoamento das habilidades, migrei o mesmo para React."</p>
                </div>
                <div><FaLink onClick={Falin}/> <p onClick={Falin}>: https://portfoliowenned.netlify.app/</p></div>

            </div>
        </div>     
    )
};

export default InfoProjeto;