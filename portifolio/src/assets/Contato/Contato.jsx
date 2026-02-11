import Style from '../Contato/Contato.module.css'


export default function Contato(){
    return(
        <section className={Style.contatos_page}>
            <div className={Style.infos}>
                <p className={Style.sobre}>Contato</p>
                <h1>Vamos <span className={Style.span_gradiente}>Conversar</span></h1>
                <p className={Style.subTitulo}>Ferramentas e tecnologias que domino para criar soluções completas.</p>
            </div>
        </section>
    )
}