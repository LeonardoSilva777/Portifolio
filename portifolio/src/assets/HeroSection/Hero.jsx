import Style from '../HeroSection/Hero.module.css'
import { Github, Linkedin, Instagram } from 'lucide-react';
import Corpo from '../../assets/HeroSection/img/Corpo2.jpg'
import Cabeca from '../../assets/HeroSection/img/Cabeca2.png'
import MinhaFoto from '../../assets/HeroSection/img/MinhaFoto.jpg'

export default function Hero() {
    return (
        <section className={Style.section_hero}>
            <aside className={Style.asideL}>
                <h1>Olá! Meu nome é <span>Leonardo</span></h1>
                <h2><span>03 </span>Anos</h2>
                <div className={Style.class_ICons}>
                    <a href="https://github.com/LeonardoSilva777" className={Style.icons} target="_blank" rel="noreferrer">
                        <Github color="#7F35AA" size={38} />
                    </a>
                    <a href="https://www.linkedin.com/in/devleonardosilva/" className={Style.icons} target="_blank" rel="noreferrer">
                        <Linkedin color="#7F35AA" size={38} />
                    </a>
                    <a href="https://www.instagram.com/leroo_leo/" className={Style.icons} target="_blank" rel="noreferrer">
                        <Instagram color="#7F35AA" size={38} />
                    </a>
                </div>

            </aside>
            <div className={Style.div_center}>
                <div className={Style.div_img}>
                    <img src={MinhaFoto} alt="Leonardo Pereira da Silva" className={Style.minhafoto} />
                </div>
            </div>

            <aside className={Style.asideR}>
                <p>Eu crio softwares e amo oque faço</p>
                <h1>Desenvolvedor Web</h1>
            </aside>
        </section>
    )

}