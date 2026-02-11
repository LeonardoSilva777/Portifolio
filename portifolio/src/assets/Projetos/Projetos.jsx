import Style from '../Projetos/Projetos.module.css'

export default function Projetos() {
    return (
        <section className={Style.projetos}>
            <div className={Style.infos}>
                <p className={Style.sobre}>Portifolio</p>
                <h1>Projetos <span>Recentes</span></h1>
                <p className={Style.subTitulo}>Uma seleção dos meus trabalhos mais recentes e impactantes.</p>
            </div>

            <section className={Style.selecao}> {/*Seleção dos projetos*/}

                {/*Lista projetos*/}

                <div className={Style.projeto}>
                    <img src="" alt="" />
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado, idealizado e desenvolvido por mim para auxiliar na autonomia de pessoas com deficiência visual utilizando Java.</p>
                    <h3 className={Style.tecnologias}>Java</h3>
                    <h3 className={Style.tecnologias}>React</h3>
                    <h3 className={Style.tecnologias}>MySQL</h3>
                </div>
                <div className={Style.projeto}>
                    <img src="" alt="" />
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado, idealizado e desenvolvido por mim para auxiliar na autonomia de pessoas com deficiência visual utilizando Java.</p>
                    <h3 className={Style.tecnologias}>Java</h3>
                    <h3 className={Style.tecnologias}>React</h3>
                    <h3 className={Style.tecnologias}>MySQL</h3>
                </div>
                <div className={Style.projeto}>
                    <img src="" alt="" />
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado, idealizado e desenvolvido por mim para auxiliar na autonomia de pessoas com deficiência visual utilizando Java.</p>
                    <h3 className={Style.tecnologias}>Java</h3>
                    <h3 className={Style.tecnologias}>React</h3>
                    <h3 className={Style.tecnologias}>MySQL</h3>
                </div>

                {/*final da Lista projetos*/}

            </section> {/*Final da Seleção dos projetos*/}



            <button className={Style.lista_projetos}>Ver todos os projetos</button>
        </section>
    )
}