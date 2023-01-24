import style from '../styles/Contato.module.css'
// import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'


function Contato(){
    return (
        <div className={`${style.conteiner}`} id="Contato">
            <h1 className={style.item} id="Contat">Contato</h1>
            {/* <span><FaLinkedin/></span>
            <span><FaGithub/></span>
            <span><FaTwitter/></span> */}
        </div>
    )
}

export default Contato