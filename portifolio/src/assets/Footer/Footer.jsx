import Style from '../Footer/Footer.module.css'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={Style.footer_page}>
            <div className={Style.infos}>
                <div className={Style.sobre}>
                    <h1><span>L</span>ero</h1>
                    <p>Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas.</p>
                </div>
                <div className={Style.redes}>
                    <a href="https://github.com/LeonardoSilva777">
                        <Github color="rgb(255, 255, 255)" size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/devleonardosilva/">
                        <Linkedin color="rgb(255, 255, 255)" size={25} />
                    </a>
                    <a href="https://www.instagram.com/leroo_leo/">
                        <Instagram color="rgb(255, 255, 255)" size={28} />
                    </a>
                    
                </div>
            </div>

            <div className={Style.links}>
                <h2>Links Rapidos</h2>
                <a href="#Home">Home</a>
                <a href="#Sobre">Sobre</a>
                <a href="#Projetos">Projetos</a>
                <a href="#Skills">Skills</a>
                <a href="#Contato">Contato</a>
            </div>

            <div className={Style.contatos}>
                <h2>Contatos</h2>
                <p>leonardop.silva1622@gmail.com</p>
                <p>+55 (11) 93390-0779</p>
                <p>São Paulo, Brasil</p>
            </div>
        </footer>
    )
}