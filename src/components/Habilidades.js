import {FaJava, FaNodeJs, FaReact, FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'

import style from '../components/logo/Habilidades.module.css'
 
function Habilidades(){


    document.addEventListener('click', (e) =>{
        
        var elem = document.getElementById('HbDv')

        switch(e.target.id){

            case 'FJs':
                elem.innerHTML = `<p><span>"</span>JavaScript<span>"</span></p>`
                break

            case 'FaJava':
                elem.innerHTML = `<p><span>"</span>Java<span>"</span></p>`
                break

            case 'FaPython':
                elem.innerHTML = `<p><span>"</span>Python<span>"</span></p>`
                break

            case 'FaNodeJs':
                elem.innerHTML = `<p><span>"</span>Node.js<span>"</span></p>`
                break

            case 'FaReact':
                elem.innerHTML = `<p><span>"</span>React<span>"</span></p>`
                break

            case 'FaHtml5':
                elem.innerHTML = `<p><span>"</span>Hypertext Markup Language<span>"</span></p>`
                break

            case 'FaCss3':
                elem.innerHTML = `                
                <p><span>"</span>Cascading Style Sheets<span>"</span></p>`
                break 

            default:
                // not default
        }

    })

    return (
        <div className={style.conteiner}>
            <FaJs id='FJs'/>
            <FaJava id='FaJava'/>
            <FaPython id='FaPython'/>

            <FaNodeJs id='FaNodeJs'/>
            <FaReact id='FaReact'/>
            <FaHtml5 id='FaHtml5'/>
            <FaCss3 id='FaCss3'/>

        <div id='HbDv' className={style.h}></div>
        </div>
    
    )
}

export default Habilidades