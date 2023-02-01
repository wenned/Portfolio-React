import {FaJava, FaNodeJs, FaReact, FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'
import { useState } from 'react'

import style from '../components/logo/Habilidades.module.css'
 
function Habilidades(){

    const [Valor, setValor] = useState('Cascading Style Sheets')

    document.addEventListener('click', (e) =>{
        
        switch(e.target.id){

            case 'FJs':
                setValor('JavaScript')
                break

            case 'FaJava':
                setValor('Java')
                break

            case 'FaPython':
                setValor('Python')
                break

            case 'FaNodeJs':
                setValor('Node.Js')
                break

            case 'FaReact':
                setValor('React')
                break

            case 'FaHtml5':
                setValor('Hypertext Markup Language')
                break

            case 'FaCss3':
                setValor('Cascading Style Sheets')
                break 

            default:
                // not default
        }

    })

    return (
        <div className={style.conteiner}>
            
            <div className={style.contnei}>
                <FaJs/>
                <span id='FJs' className={style.pon}></span>
            </div>

            <div className={style.contnei}>
                <FaJava />
                <span id='FaJava' className={style.pon}></span>
            </div>

            <div className={style.contnei}>
                <FaPython/>
                <span id='FaPython' className={style.pon}></span>
            </div>

            <div className={style.contnei}>
                <FaNodeJs/>
                <span id='FaNodeJs' className={style.pon}></span>
            </div>

            <div className={style.contnei}>
                <FaReact/>
                <span id='FaReact' className={style.pon}></span>
            </div>

            <div className={style.contnei}>
                <FaHtml5/>
                <span id='FaHtml5' className={style.pon}></span>
            </div>

            <div className={style.contnei}>
                <FaCss3/>
                <span id='FaCss3' className={style.pon}></span>
            </div>
        
            <section id='HbDv' className={style.h}>
                <div>
                    <span>"</span>
                    <span>{Valor}</span>
                    <span>"</span>
                </div>
            </section>

        </div>
    
    )
}

export default Habilidades