import {FaJs, FaHtml5, FaCss3, FaLink} from 'react-icons/fa'
import style from './styles/InfoProjeto.module.css'
import portifolioImg from '../../imagens/portifolio.png';



function InfoProjeto(){

    const Falin = () =>{
        window.open('https://portfoliowenned.netlify.app/', '_blank')
    }

    return(

        <div className={style.Container}>
                
            <div className={style.imagemProjeto}><img src={portifolioImg} alt='portifolio'/></div>

            <div className={style.contSecundario} id='secod'>

                <h1>Tecnologias Usadas:</h1>

                <div className={style.skils}>
                    <div><FaJs/> : JavaScript</div>
                    <div><FaHtml5/> : Hypertext Markup Language</div>
                    <div><FaCss3/> : Cascading Style Sheets</div>
                </div>

                <div className={style.texto}>
                    <p>
                        "Comecei meu aprendizado em desenvolvimento web com um projeto que utilizou <strong>JavaScript</strong>, <strong>HTML</strong> e <strong>CSS</strong> puros como parte de um trabalho acadêmico. Esse projeto inicial me ajudou a compreender os fundamentos do desenvolvimento web e a aprimorar minhas habilidades.
                    </p>

                    <p>
                        À medida que ganhei confiança e experiência, decidi migrar esse projeto para o framework React. Essa mudança me permitiu explorar uma abordagem mais avançada para criar interfaces de usuário interativas.
                    </p>

                    <p>
                        Com o React, pude dividir a interface em componentes reutilizáveis, facilitando a manutenção e expansão do projeto.
                        Uma das maiores vantagens do React é seu ecossistema robusto, que oferece várias bibliotecas e ferramentas para melhorar a produtividade do desenvolvedor e adicionar funcionalidades avançadas."
                    </p>
                    
                </div>

                <div className={style.link}><FaLink onClick={Falin}/> <p onClick={Falin}>: https://portfoliowenned.netlify.app/</p></div>

            </div>
        </div>     
    )
};

export default InfoProjeto;