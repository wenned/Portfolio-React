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
            <div className={style.pro}>
                <span className={style.titulos} >Programação</span>
                <ol>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Python</li>
                </ol>
            </div>

            <div className={style.linha}></div>

            <div className={style.desen}>
                <span className={style.titulos} >Desenvolvimento</span>
                <ol>
                    <li>Node.JS</li>
                    <li>Next.JS</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>Css</li>
                </ol>
            </div>
        </div>
    )
}

export default Contato