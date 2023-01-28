import {FaJava, FaNodeJs, FaReact, FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'

import style from '../components/logo/Habilidades.module.css'
 
function Habilidades(){

    return (
        <div className={style.conteiner}>
            <FaJs/>
            <FaJava/>
            <FaPython/>

            <FaNodeJs/>
            <FaReact/>
            <FaHtml5/>
            <FaCss3/>

        </div>
    )
}

export default Habilidades