import style from '../styles/Projetos.module.css'
import { useState } from "react";
import LayoutProjeto from "../components/layout_projeto/LayoutProjeto";



function Projetos(){

    const [layout1, setLayout1] = useState('')
    const [layout2, setLayout2] = useState('')
    const [layout3, setLayout3] = useState('')
    const [layout4, setLayout4] = useState('')

  document.addEventListener('click', (e)=>{

    switch (e.target.id){

        case 'Elemento1':
            
            if(layout1 === ''){
                setLayout1('active');
            }else(setLayout1(''))
            
            break


        case 'Elemento2':

            if(layout2 === ''){
                setLayout2('active')
            }else(setLayout2(''))
            
            break
            
        case 'Elemento3':

            if(layout3 === ''){
                setLayout3('active')
            }else(setLayout3(''))
            
            break
            
        case 'Elemento4':

            if(layout4 === ''){
                setLayout4('active')
            }else(setLayout4(''))
            
            break

        default:
            //no default
    }

})

    return (
        <>
            <div className={style.conteiner} id="Projetos">
                <LayoutProjeto cost1={layout1} cost2={layout2} cost3={layout3} cost4={layout4}/>
            </div>
        </>
        )
}

export default Projetos