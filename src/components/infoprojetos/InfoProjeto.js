import {FaJs, FaHtml5, FaCss3} from 'react-icons/fa'
import style from './InfoProjeto.module.css'


function InfoProjeto(){

    return(

        <div className={style.Container}>

            <h1>Tecnologias Usadas:</h1>

            <div>
                <div><FaJs/>: JavaScript</div>
                <div><FaHtml5/>: Hypertext Markup Language</div>
                <div><FaCss3/>: Cascading Style Sheets</div>
            </div>
        </div>     
    )
};

export default InfoProjeto;