import { useState } from 'react';
import InfoProjeto from '../infoprojetos/InfoProjeto';
import style from '../layout_projeto/LayoutProjeto.module.css'


function LayoutProjeto(){


    const [layout1, setLayout1] = useState('')
    const [layout2, setLayout2] = useState('')
    const [layout3, setLayout3] = useState('')
    const [layout4, setLayout4] = useState('')

  document.addEventListener('click', (e)=>{

    switch (e.target.id){

        case 'l1':
            
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
    return(
 
        <div className={style.conteiner}>

            <div className={`${style.l1} ${style[layout1]}`}>
                <div className={`${style.nomeProjeto}`} id='l1'>PORTIFOLIO</div>
                                
                <div className={style.conteinerSecundario}>
                        <InfoProjeto id='hy'/>
                </div>
            </div>

            <div className={`${style.l2} ${style[layout2]}`}>
                <span>B R E V E</span>
            </div>

            <div className={`${style.l3} ${style[layout3]}`}>
                <div id="Elemento3" className={style.DivStyle} ></div>
                <span>B R E V E</span>
            </div>
            
            <div className={`${style.l4} ${style[layout4]}`}>
                <div id="Elemento4" className={style.DivStyle} ></div>
                <span>B R E V E</span>
            </div>
        </div>
    )
};

export default LayoutProjeto;