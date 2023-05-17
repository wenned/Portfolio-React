import style from '../styles/Sobre.module.css'
import Capa from '../imagens/capa.png'


function Sobre(){
    return (
        <section className={style.conteiner} id="Sobre">

                <div className={style.imG}><img src={Capa} alt="capa"/></div>
    
                <div>
                    <p><strong>Nome: </strong>Wenned Silva</p>
                        <br/>
                        <p>Sou uma pessoa dinâmica, aberto a novas experiências, sempre tentando ser pontual e cumprir compromissos, nascido em, <strong>Cândido Mendes, MA</strong>, mudei-me para <strong>Imperatriz, MA</strong> aos 16 anos, sempre com objetivo de me especializar na area da tecnologia, mesmo naquela época não sabendo para qual área realmente focar, sempre me adaptei facilmente em varias áreas da programação tanto, <strong>Programação Back-end</strong>, onde foi meu primeiro contato com programação, e agora nessa nova fase com <strong>Programação Fronte-end</strong></p>
                        <br/>
                        <p><strong>Hobbies:</strong> Estudar programação, <strong>"JavaScript", "Python", "JAVA", "POSTGRESQL", "MongoDB"</strong>. Desemvolvimento Web: <strong>"NODE.JS", "REACT", "NEXT.JS", "HTML", "CSS"</strong>.</p>
                </div>

                <div >
                    <p><strong>Formação</strong></p>

                    <p><strong>Entidade :</strong><small> UNINTER Centro Universitário Internacional</small></p>
                    <strong>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</strong> - <small>Em andamento.</small>
                    
                    <p><strong>Idioma :</strong> Portugues, Ingles - <small>Cursando</small></p>

                </div> 

                <div>
                    <p>"Tenho trabalhado em projetos pessoais para desenvolver minhas habilidades em programação. Entre elas <strong>React, JavaScript, Python e Postgresql.</strong> Durante o processo, estou aprendendo a lidar com autenticação de usuários e armazenamento de dados. Além disso, fui capaz de solucionar problemas técnicos por conta própria, destacando minha capacidade de pensar de forma crítica e encontrar soluções. Estou animado para continuar aprendendo e aplicando meus conhecimentos em futuros projetos."</p>
                </div>

        </section>
        )
}

export default Sobre
