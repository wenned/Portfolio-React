import { useState } from 'react'
import style from '../styles/Projetos.module.css'
import InfoProjeto from '../components/infoprojetos/InfoProjeto'
import RestAPI from '../components/infoprojetos/RestApi'



function Projetos(){

    const [active, setActive] = useState('')
    const [activeProjeto, setActiveProjeto] = useState('')
    const [nomeNone, setnomeNone] = useState('')

    const [activE, setActivE] = useState('')
    const [activeProjetO, setActiveProjetO] = useState('')
    const [nomeNonE, setnomeNonE] = useState('')

    function ActiveProjeto(...args){

        switch(args[0]){

            case 'Portifolio':

                if(active === ''){
                    setActive('active')
                    setActiveProjeto('activeProjeto')
                    setnomeNone('nomeNone')
                }else{
                    setActive('')
                    setActiveProjeto('')
                    setnomeNone('')
                }
                
                break

            case 'RestAPI':

            if(activE === ''){
                setActivE('active')
                setActiveProjetO('activeProjeto')
                setnomeNonE('nomeNone')
            }else{
                setActivE('')
                setActiveProjetO('')
                setnomeNonE('')
            }
            
            break

            default:
                break
        }
    }

    return (
        <div id='Projetos' className={style.Conteiner}>

            <div className={`${style.conteinerProjetos} ${style[active]}`} onClick={()=>{ActiveProjeto('Portifolio')}}>
                <div className={`${style.nomeProjeto}  ${style[nomeNone]}`}>PORTIFOLIO</div>
                <div className={`${style.projetoNone} ${style[activeProjeto]}`}><InfoProjeto/></div>
            </div>

            <div className={`${style.conteinerProjetos} ${style[activE]}`} onClick={()=>{ActiveProjeto('RestAPI')}}>
                <div className={`${style.nomeProjeto}  ${style[nomeNonE]}`}>RestAPI</div>
                <div className={`${style.projetoNone} ${style[activeProjetO]}`}><RestAPI/></div>
            </div>

            <div className={style.conteinerProjetos}>
                <div className={style.nomeProjeto}>BREVE</div>
            </div>

            <div className={style.conteinerProjetos}>
                <div className={style.nomeProjeto}>BREVE</div>
            </div>
        </div>
        )
}

export default Projetos