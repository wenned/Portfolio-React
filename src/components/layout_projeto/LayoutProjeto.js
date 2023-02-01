import style from '../layout_projeto/LayoutProjeto.module.css'

function LayoutProjeto({cost1, cost2, cost3, cost4}){

    return(

        <>
            <div id="Elemento1" className={`${style.l1} ${style[cost1]}`}></div>
            <div className={`${style.l2} ${style[cost2]}`}><div id="Elemento2" ></div><span>B R E V E</span></div>
            <div className={`${style.l3} ${style[cost3]}`}><div id="Elemento3" ></div><span>B R E V E</span></div>
            <div className={`${style.l4} ${style[cost4]}`}><div id="Elemento4" ></div><span>B R E V E</span></div>
        </>
    )
};

export default LayoutProjeto;