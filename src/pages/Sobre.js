import style from '../styles/Sobre.module.css'
import Capa from '../imagens/capa.png'
import Fone from '../imagens/fone.png'


function Sobre(){
    return (
        <section className={style.conteiner} id="Sobre">

            <div className={style.imG}><img src={Capa} alt="capa"/></div>

            <div>
                <p><strong>Nome: </strong>Wenned Silva</p>
                    <p>Sou uma pessoa dinâmica, aberto a novas experiencias, sempre tentando ser pontual e compromissado, nascido em, <strong>Cândido Mendes - MA</strong>, migrei para <strong>Imperatriz - MA</strong> aos 16 anos, sempre com objetivo de me especializar na area da tecnologia, mesmo naquela época não sabendo para qual área realmente focar, sempre me adaptei facilmente em varias áreas, mas a paixão por programação principalmente por, <strong>Programação Back-end</strong></p>
                    <p><strong>Hobbies:</strong> Estudar programação, <strong>"JavaScript", "Python", "JAVA", "POSTGRESQL"</strong>. Desemvolvimento <strong>"NODE.JS", "REACT", "NEXT.JS", "HTML", "CSS"</strong>.Escutar musica, Dançar, Cozinha, Natação, Patinar.</p>
            </div>


            <div >
                <p><strong>Formação</strong></p>


                <p><strong>Entidade :</strong><small> UNINTER Centro Universitário Internacional</small></p>
                <strong>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</strong> - <small>Em andamento.</small>
                
                <p><strong>Idioma :</strong> Portugues, Ingles - <small>Cursando</small></p>

            </div>
            <div className={style.imGG}><img  className={style.fone} src={Fone} alt="fone"/></div>
            <div className={style.l2}></div>
            <div className={style.v2}></div>

        </section>
        )
}

export default Sobre