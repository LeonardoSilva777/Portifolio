import Style from '../Sobre/Sobre.module.css'
import { CodeXml, Palette, Rocket, Zap } from 'lucide-react';

export default function Sobre(){
        return(
        <section className={Style.section_sobre}>
            <div className={Style.infos}>
                <p className={Style.sobre}>Sobre mim</p>
                <h1>Desenvolvedor <span>Full Stack</span></h1>
                <p className={Style.subTitulo}>Apaixonado por criar experiências digitais únicas e funcionais. Transformo ideias em realidade através de código limpo e design impecável.</p>
            </div>
            <div className={Style.habilidades}>
                <div className={Style.skills}>
                    <CodeXml color="#7e22ce" size={48} />
                    <h2>Desenvolvimento</h2>
                    <p>Criação de aplicações web e mobile com tecnologias modernas.</p>
                </div>
                <div className={Style.skills}>
                    <Palette color="#7e22ce" size={48} />
                    <h2>Desenvolvimento</h2>
                    <p>Criação de aplicações web e mobile com tecnologias modernas.</p>
                </div>
                <div className={Style.skills}>
                    <Rocket color="#7e22ce" size={48} />
                    <h2>Desenvolvimento</h2>
                    <p>Criação de aplicações web e mobile com tecnologias modernas.</p>
                </div>
                <div className={Style.skills}>
                    <Zap color="#7e22ce" size={48} />
                    <h2>Desenvolvimento</h2>
                    <p>Criação de aplicações web e mobile com tecnologias modernas.</p>
                </div>
            </div>

            <div className={Style.especs}>
                <div className={Style.numeros}>
                    <h2>+3</h2>
                    <p>anos de estudo</p>
                </div>
                <div className={Style.numeros}>
                    <h2>10</h2>
                    <p>projetos</p>
                </div>
                <div className={Style.numeros}>
                    <h2>80%</h2>
                    <p>satisfação</p>
                </div>
            </div>
        </section>
        )
    }
