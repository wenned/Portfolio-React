import style from '../styles/Projetos.module.css'

function Projetos(){

//   document.addEventListener('click', (e)=>{
//     var Div1 = document.getElementById('Elemento1')
//     var Div2 = document.getElementById('Elemento1')
//     var Div3 = document.getElementById('Elemento1')
//     var Div4 = document.getElementById('Elemento1')
//     var Div5 = document.getElementById('Projetos')

//     switch (e.target.id){

//         case 'Elemento1':

//             Div5.removeChild(Div1, Div2, Div3, Div4)
//             break

//         case 'Elemento2':

//             break
            
//         case 'Elemento3':
//             console.log(`clicou no elemento ${e.target.id}`)
//             break
            
//         case 'Elemento4':
//             console.log(`clicou no elemento ${e.target.id}`)
//             break
//         default:
//             //no default
//     }

// })


    return (
    
        <div className={style.conteiner} id="Projetos">

            <div id="Elemento1" className={style.l1}></div>
            <div id="Elemento2" className={style.l2}><div></div></div>

            <div id="Elemento3" className={style.l3}><div></div></div>
            <div id="Elemento4" className={style.l4}></div>

        </div>
        )
}

export default Projetos