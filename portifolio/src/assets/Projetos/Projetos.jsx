import Style from '../Projetos/Projetos.module.css'
import { Github, ExternalLink } from 'lucide-react';
import EYEGEN1 from '../img/EYEGEN1.jpeg'

export default function Projetos() {
    return (
       <section className={Style.projetos}>
            <div className={Style.infos}>
                <p className={Style.sobre}>Portfólio</p>
                <h1>Meus <span className={Style.span_gradiente}>Projetos</span></h1>
                <p className={Style.subTitulo}>Uma seleção dos meus trabalhos mais recentes e impactantes.</p>
            </div>

            <section className={Style.selecao}> {/*Seleção dos projetos*/}

                {/*Lista projetos*/}

                <div className={Style.projeto}>
                    <div className={Style.img_container}>
                        <img src={EYEGEN1} alt="EyeGen" />
                        <div className={Style.overlay}>
                            <a href="seu_github" target="_blank"><Github size={24} /></a>
                            <a href="seu_link" target="_blank"><ExternalLink size={24} /></a>
                        </div>
                    </div>
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado...</p>
                    <div className={Style.tags}>
                        <span className={Style.tecnologias}>Java</span>
                        <span className={Style.tecnologias}>React</span>
                    </div>
                </div>
                <div className={Style.projeto}>
                    <div className={Style.img_container}>
                        <img src={EYEGEN1} alt="EyeGen" />
                        <div className={Style.overlay}>
                            <a href="seu_github" target="_blank"><Github size={24} /></a>
                            <a href="seu_link" target="_blank"><ExternalLink size={24} /></a>
                        </div>
                    </div>
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado...</p>
                    <div className={Style.tags}>
                        <span className={Style.tecnologias}>Java</span>
                        <span className={Style.tecnologias}>React</span>
                    </div>
                </div>
                <div className={Style.projeto}>
                    <div className={Style.img_container}>
                        <img src={EYEGEN1} alt="EyeGen" />
                        <div className={Style.overlay}>
                            <a href="seu_github" target="_blank"><Github size={24} /></a>
                            <a href="seu_link" target="_blank"><ExternalLink size={24} /></a>
                        </div>
                    </div>
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado...</p>
                    <div className={Style.tags}>
                        <span className={Style.tecnologias}>Java</span>
                        <span className={Style.tecnologias}>React</span>
                    </div>
                </div>
                

                {/*final da Lista projetos*/}

            </section>



            <button className={Style.lista_projetos}>Ver todos os projetos</button>
        </section>
    )
}