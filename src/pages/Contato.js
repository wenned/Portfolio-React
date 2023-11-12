import style from '../styles/Contato.module.css'
import {VscGithub} from 'react-icons/vsc'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Contato(){

    const FaLink = () => {
        window.open("https://www.linkedin.com/in/wenned-silva-078b30180/", '_blank');
      };

      const FaGit = () => {
        window.open("https://github.com/wenned", '_blank');
      };

      const FaTw = () => {
        window.open("https://twitter.com/WennedSilva", '_blank');
      };

    return (
        <div className={`${style.conteiner}`} id="Contato">

            <div className={style.skillProgramacao}>
                <span className={style.titulos} >Programação</span>
                <ol>
                    <li>JavaScript</li>
                    <li>Node.JS</li>
                    <li>Java</li>
                    <li>Python</li>
                </ol>
            </div>

            <div className={style.skillDesenvolvimento}>
                <span className={style.titulos} >Desenvolvimento</span>
                <ol>
                    <li>Next.JS</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>Css</li>
                </ol>
            </div>

            <div className={style.redeContato} id='Contat'>

                <div className={style.conteinerCirculo}>
                    <div className={style.circulo}>
                        <div className={style.ws}>WS</div>
                    </div>
                </div>

                <div className={style.iconsRede}>
                    <FaLinkedinIn alt="Linkdin" onClick={FaLink}/>
                    <VscGithub alt="GitHub" onClick={FaGit}/>
                    <FaXTwitter  alt="Twitter" onClick={FaTw}/>
                </div>

            </div>
        </div>
    )
}

export default Contato