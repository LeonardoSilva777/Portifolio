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
                    <a href="#">
                        <Github color="#7F35AA" size={28} />
                    </a>
                    <a href="#">
                        <Linkedin color="#7F35AA" size={28} />
                    </a>
                    <a href="#">
                        <Instagram color="#7F35AA" size={28} />
                    </a>
                    
                </div>
            </div>

            <div className={Style.links}>
                <h2>Links Rapidos</h2>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Skills</a>
                <a href="#">Contato</a>
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