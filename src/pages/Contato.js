import style from '../styles/Contato.module.css'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'


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

            <div className={style.social} id='Contat'>

                <span className={style.l}><FaLinkedin onClick={FaLink}/></span>
                <span className={style.l}><FaGithub onClick={FaGit}/></span>
                <span className={style.l}><FaTwitter onClick={FaTw}/></span>

            </div>

            <div className={style.pro}>
                <span className={style.titulos} >Programação</span>
                <ol>
                    <li>JavaScript</li>
                    <li>Node.JS</li>
                    <li>Java</li>
                    <li>Python</li>
                </ol>
            </div>

            <div className={style.linha}></div>

            <div className={style.desen}>
                <span className={style.titulos} >Desenvolvimento</span>
                <ol>

                    <li>Next.JS</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>Css</li>
                </ol>
            </div>

            <div className={style.l2}></div>
            <div className={style.v2}></div>
            
        </div>
    )
}

export default Contato