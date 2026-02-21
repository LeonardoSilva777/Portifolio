import Style from '../Projetos/Projetos.module.css'
import { Github, ExternalLink } from 'lucide-react';
import EYEGEN1 from '../img/EYEGEN1.jpeg'
import FRANK from '../img/FRANK.png'
import PORTIFOLIO from '../img/PORTIFOLIO.png'

export default function Projetos() {
    return (
       <section id="Projetos" className={Style.projetos}>
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
                            <a href="https://github.com/EyeGenesis" target="_blank"><Github size={24} /></a>
                            <a href="https://www.eyegen.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnKhLtZ-UwhK85YRRE44fpb0FnQKoGl1vrcCCtD2duEsASWn1Cb5LA19GPNPQ_aem_wNOIm9hPxpdOZvjdD-6P4w" target="_blank"><ExternalLink size={24} /></a>
                        </div>
                    </div>
                    <h2>EyeGen</h2>
                    <p>Sistema de visão computacional premiado...</p>
                    <div className={Style.tags}>
                        <span className={Style.tecnologias}>Java</span>
                        <span className={Style.tecnologias}>React</span>
                        <span className={Style.tecnologias}>CSS</span>
                        <span className={Style.tecnologias}>Python</span>
                    </div>
                </div>
                <div className={Style.projeto}>
                    <div className={Style.img_container}>
                        <img src={FRANK} alt="FRANK_SELECTOR" />
                        <div className={Style.overlay}>
                            <a href="https://github.com/LeonardoSilva777/Frank_Selector" target="_blank"><Github size={24} /></a>
                            <a href="https://frank-selector.vercel.app" target="_blank"><ExternalLink size={24} /></a>
                        </div>
                    </div>
                    <h2>Frank Selector - Home Page</h2>
                    <p>Home page do projeto Frank Selector</p>
                    <div className={Style.tags}>
                        <span className={Style.tecnologias}>React</span>
                        <span className={Style.tecnologias}>CSS</span>
                    </div>
                </div>
                <div className={Style.projeto}>
                    <div className={Style.img_container}>
                        <img src={PORTIFOLIO} alt="Meu Portifolio" />
                        <div className={Style.overlay}>
                            <a href="https://github.com/LeonardoSilva777/Portifolio" target="_blank"><Github size={24} /></a>
                            <a href="seu_link" target="_blank"><ExternalLink size={24} /></a>
                        </div>
                    </div>
                    <h2>Meu Portifolio</h2>
                    <p>Meu primeiro portifolio profissional</p>
                    <div className={Style.tags}>
                        <span className={Style.tecnologias}>React</span>
                        <span className={Style.tecnologias}>CSS</span>
                    </div>
                </div>
                

                {/*final da Lista projetos*/}

            </section>



            <button className={Style.lista_projetos}>Ver todos os projetos</button>
        </section>
    )
}