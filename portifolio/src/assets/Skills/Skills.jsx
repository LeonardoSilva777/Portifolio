import Style from '../Skills/Skills.module.css'


export default function Skills(){
    return(
        
        <section className={Style.Skills_page}>  {/*Pagina*/}
            <div className={Style.infos}>
                <p className={Style.sobre}>Tecnologias</p>
                <h1>Minhas <span className={Style.span_gradiente}>Skills</span></h1>
                <p className={Style.subTitulo}>Ferramentas e tecnologias que domino para criar soluções completas.</p>
            </div>

        <section className={Style.categorias}>
            <div className={Style.Skills_geral}>
                <h1> - BackEnd</h1>
                <p>Java</p>
                <progress value={0.7} />
                <p>Python</p>
                <progress value={0.5}/>
                <p>SQL</p>
                <progress value={0.5}/>
                <p>JS</p>
                <progress value={0.5}/>
            </div>

            <div className={Style.Skills_geral}>
                <h1> - FrontEnd</h1>
                <p>Java</p>
                <progress value={0.7} />
                <p>Python</p>
                <progress value={0.5}/>
                <p>SQL</p>
                <progress value={0.5}/>
                <p>JS</p>
                <progress value={0.5}/>
            </div>

            <div className={Style.Skills_geral}>
                <h1> - Ferramentas</h1>
                <p>Java</p>
                <progress value={0.7} />
                <p>Python</p>
                <progress value={0.5}/>
                <p>SQL</p>
                <progress value={0.5}/>
                <p>JS</p>
                <progress value={0.5}/>
            </div>        
        </section>
            
        {/*Final Pagina*/}
        </section>  
    )
}