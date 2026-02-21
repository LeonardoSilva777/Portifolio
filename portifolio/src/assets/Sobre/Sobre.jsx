import Style from '../Sobre/Sobre.module.css'
import { CodeXml, Palette, Rocket, Zap } from 'lucide-react';

export default function Sobre() {
    return (
        <section id="Sobre" className={Style.section_sobre}>
            <div className={Style.infos}>
                <p className={Style.sobre}>Sobre mim</p>
                <h1>Desenvolvedor <span className={Style.span_gradiente}>Full Stack</span></h1>
                <p className={Style.subTitulo}>Apaixonado por criar experiências digitais únicas e funcionais.</p>
            </div>
            <div className={Style.habilidades}>
                <div className={Style.skills}>
                    <div className={Style.icon}>
                        <CodeXml color="#8849c0" size={45} />
                    </div>
                    <h2>Desenvolvimento</h2>
                    <p>Criação de aplicações web e mobile com tecnologias modernas.</p>
                </div>
                <div className={Style.skills}>
                    <div className={Style.icon}>
                    <Palette color="#8849c0" size={45} />
                    </div>
                    <h2>UI/UX Design</h2>
                    <p>Interfaces intuitivas com foco em experiência do usuário.</p>
                </div>
                <div className={Style.skills}>
                    <div className={Style.icon}>
                    <Rocket color="#8849c0" size={45} />
                    </div>
                    <h2>Performance</h2>
                    <p>Código otimizado para máximo desempenho e escalabilidade.</p>
                </div>
                <div className={Style.skills}>
                    <div className={Style.icon}>
                        <Zap color="#8849c0" size={45} />
                    </div>
                    <h2>Inovação</h2>
                    <p>Soluções criativas usando as últimas tendências do mercado.</p>
                </div>
            </div>

            <div className={Style.especs}>
                <div className={Style.numeros}>
                    <h2>3+</h2>
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
