import { useState } from 'react';
import InfoProjeto from '../infoprojetos/InfoProjeto';
import style from '../layout_projeto/LayoutProjeto.module.css'


function LayoutProjeto(){


    const [layout1, setLayout1] = useState('')
    const [layoutDiv1, setLayoutDiv1] = useState('')
    const [nomeoff, setNomeoff] = useState('')

    const [layout2, setLayout2] = useState('')
    const [layout3, setLayout3] = useState('')
    const [layout4, setLayout4] = useState('')

  document.addEventListener('click', (e)=>{
    console.log(e.target)
    switch (e.target.id){

        case 'Elemento1':
            
            if(layout1 === ''){
                setLayout1('active');
                setLayoutDiv1('inativoOk')
                setNomeoff('nome')
            }else{
                setLayout1('');
                setLayoutDiv1('')
            }
            
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

        case 'secod':
                        
            setLayout1('');
            setLayoutDiv1('')
            setNomeoff('')
            break

        default:
            //no default
    }

})
    return(
 
        <div className={style.conteiner}>

            <div  id='Elemento1' className={`${style.l1} ${style[layout1]}`}>
                <div className={`${style.nomeProjeto}  ${style[nomeoff]}`} >PORTIFOLIO</div>
                <div className={`${style.inativo} ${style[layoutDiv1]}`}><InfoProjeto/></div>
            </div>

            <div  id='Elemento1' className={`${style.l2} ${style[layout2]}`}>
                <span className={`${style.nomeProjeto2}  ${style[nomeoff]}`} >B R E V E</span>
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