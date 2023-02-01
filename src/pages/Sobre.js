import style from '../styles/Sobre.module.css'
import Capa from '../imagens/capa.png'


function Sobre(){
    return (
        <section className={style.conteiner} id="Sobre">

            <div className={style.imG}><img src={Capa} alt="capa"/></div>

            <div>
                <p><strong>Nome: </strong>Wenned Silva</p>
                    <p>Sou uma pessoa dinâmica, aberto a novas experiências, sempre tentando ser pontual e cumprir compromissos, nascido em, <strong>Cândido Mendes, MA</strong>, mudei-me para <strong>Imperatriz, MA</strong> aos 16 anos, sempre com objetivo de me especializar na area da tecnologia, mesmo naquela época não sabendo para qual área realmente focar, sempre me adaptei facilmente em varias áreas, mas a paixão por programação principalmente por, <strong>Programação Back-end</strong></p>
                    <p><strong>Hobbies:</strong> Estudar programação, <strong>"JavaScript", "Python", "JAVA", "POSTGRESQL"</strong>. Desemvolvimento Web: <strong>"NODE.JS", "REACT", "NEXT.JS", "HTML", "CSS"</strong>.Escutar musica, Dançar, Cozinha, Natação, Patinar.</p>
            </div>

{/* <>"Tenho trabalhado em vários projetos pessoais nos últimos anos para desenvolver minhas habilidades em programação. Um dos meus projetos mais recentes foi construir uma aplicação de gerenciamento de tarefas utilizando React e Firebase. Durante o processo, aprendi a lidar com autenticação de usuários e armazenamento de dados na nuvem. Além disso, fui capaz de solucionar problemas técnicos por conta própria, destacando minha capacidade de pensar de forma crítica e encontrar soluções. Estou animado para continuar aprendendo e aplicando meus conhecimentos em futuros projetos."</> */}
            <div >
                <p><strong>Formação</strong></p>


                <p><strong>Entidade :</strong><small> UNINTER Centro Universitário Internacional</small></p>
                <strong>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</strong> - <small>Em andamento.</small>
                
                <p><strong>Idioma :</strong> Portugues, Ingles - <small>Cursando</small></p>

            </div>
            <div className={style.l2}></div>
            <div className={style.v2}></div>

        </section>
        )
}

export default Sobre