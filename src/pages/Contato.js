import style from '../styles/Contato.module.css'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'


function Contato(){
    return (
        <div className={`${style.conteiner}`} id="Contato">
            <div className={style.social} id='Contat'>
                <span className={style.l}><FaLinkedin/></span>
                <span className={style.l}><FaGithub/></span>
                <span className={style.l}><FaTwitter/></span>
            </div>
            <div className={style.habil}>
                <span className={style.titulos} >Programação</span>
                <span>JavaScript</span>
                <span>Java</span>
                <span>Python</span>
                <div className={style.linha}></div>
                <span className={style.titulos} >Desenvolvimento</span>
                <span>Node.JS</span>
                <span>Next.JS</span>
                <span>React</span>
                <span>Html</span>
                <span>Css</span>
            </div>
        </div>
    )
}

export default Contato