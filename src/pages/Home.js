import style from '../styles/Home.module.css'
import Fone from '../imagens/home.jpg'
import {FaJava, FaNodeJs, FaReact, FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'
import { useState } from 'react'

function Home(){

    const [Valor, setValor] = useState('Click nas habilidades acima!')

    function Habilidades(...args){

        switch(args[0]){

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
}

    return (
    <div className={style.conteiner} id="Home">

        <div id="troca2" className={style.imagemHome}><img className={style.home} src={Fone} alt="fone"/></div>

        <div className={style.habilidades}>

            <h1 className={style.titulo}>Habilidades</h1>

            <div className={style.skils}><FaJs id='FJs' onClick={()=>{Habilidades('FJs')}}/> <FaJava id='FaJava' onClick={()=>{Habilidades('FaJava')}}/> <FaPython id='FaPython' onClick={()=>{Habilidades('FaPython')}}/> <FaNodeJs id='FaNodeJs' onClick={()=>{Habilidades('FaNodeJs')}}/> <FaReact id='FaReact' onClick={()=>{Habilidades('FaReact')}}/> <FaHtml5 id='FaHtml5' onClick={()=>{Habilidades('FaHtml5')}}/> <FaCss3 id='FaCss3' onClick={()=>{Habilidades('FaCss3')}}/></div>

            <div >
                <div className={style.tela}>
                    <div className={style.valorSkil}>{Valor}</div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Home