import { FaLink, FaNodeJs } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import ImagemAPi from '../../imagens/restapi.png'
import style from './styles/RestApi.module.css'

function RestAPI (){

    const Falin = () =>{
        window.open('https://github.com/wenned/API-NODE-MONGODB', '_blank')
    }

    return (
        <div className={style.conteiner}>
            
            <div className={style.imagemRestapi}><img src={ImagemAPi} alt='Rest API'/></div>

            <div className={style.conteinerDescricao}>

                <h1>Tecnologias Usadas:</h1>

                <div className={style.skilsTec}>
                    <div><FaNodeJs/> : Node.JS</div>
                    <div><BiLogoMongodb/> : MongoDB</div>
                    <div><SiExpress/> : Express</div>
                </div>

                <div  className={style.apresentacao}>
                    <h4>API para Sistema de Autoatendimento Eletrônico e Controle de Caixa de Restaurante/Bar.</h4>
                    <p>"
                         API é uma solução avançada e flexível, desenvolvida em <strong>Node.JS </strong>e integrada ao <strong>MongoDB</strong>, projetada para atender às necessidades específicas de restaurantes, bares e estabelecimentos similares. Esta API oferece é uma solução completa para modernização de restaurantes ou bares, aumentar a eficiência operacional e proporcionar uma experiência mais conveniente aos clientes. ."</p>
                    
                    <h5>Recursos Principais</h5>
                    
                    <p>Gestão de Cardápio, Pedidos Online, Integração de Caixa, Integração de Caixa, Gestão de Estoque, Integração de Mesa e Comanda, Segurança e Autenticação </p>

                </div>
            
                <div className={style.linkApi}><FaLink onClick={Falin}/> <p onClick={Falin}>: https://github.com/wenned/API-NODE-MONGODB</p></div>

            </div>
        </div>
    )
}

export default RestAPI;