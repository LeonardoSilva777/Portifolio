import Style from '../HeroSection/Hero.module.css'
import { Github, Linkedin, Instagram, Sparkles, CodeXml, Zap, Layers } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';



export default function Hero() {
    return (
        <section id="Hero" className={Style.section_hero}>
            <div className={Style.proposta}>
                <Sparkles color="#7e22ce" size={25} />
                <p>Disponivel para novos projetos</p>
            </div>

            <div className={Style.text}>
                <h1>Ola Meu nome é <span>Leonardo</span></h1>
                <p>Sou estudante de ciência da computação apaixonado por tecnologia e em aprender!</p>

            </div>


            <div className={Style.tecnologias}>
                <div className={Style.categorias1} data-tech="React">
                    <CodeXml color="#7e22ce" size={48} />
                </div>
                <div className={Style.categorias2} data-tech="Java">
                    <Zap color="#14ccf9" size={48} />
                </div>
                <div className={Style.categorias3} data-tech="SQL">
                    <Layers color="#fb9f42" size={45} />
                </div>
            </div>

            <div className={Style.telas}>
                <Link smooth to="#Projetos" className={Style.projetos}>
                    Ver Projetos
                </Link>

            
                <Link smooth to="#Contatos" className={Style.contato}>
                    Entrar em contato
                </Link>
            </div>

            <div className={Style.redes}>
                <a href="https://github.com/LeonardoSilva777" target="_blank" rel="noreferrer">
                    <Github color="#7e22ce" size={35} />
                </a>
                <a href="https://www.linkedin.com/in/devleonardosilva/" target="_blank" rel="noreferrer">
                    <Linkedin color="#7e22ce" size={35} />
                </a>
                <a href="https://www.instagram.com/leroo_leo/" target="_blank" rel="noreferrer">
                    <Instagram color="#7e22ce" size={35} />
                </a>
            </div>

        </section>
    )

}