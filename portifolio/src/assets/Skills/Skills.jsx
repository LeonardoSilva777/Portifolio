import Style from '../Skills/Skills.module.css'


export default function Skills() {
    return (

        <main id="Skills" className={Style.Skills_page}>  {/*Pagina*/}
            <header className={Style.info}>
                <div className={Style.sobre}>Hard/Softs Skills</div>
                <h1>Minhas <span>Skills</span></h1>
                <p>Ferramentas e tecnologias que domino para criar soluções completas.</p>
            </header>
            <section className={Style.categorias}>
                <div className={Style.skill}>
                    <h2>FronteEnd</h2>
                    <div className={Style.skill_item}>
                        <div className={Style.skill_label}>
                            <span>React</span>
                            <span>50%</span>
                        </div>
                        <progress value={0.5}></progress>
                        <div className={Style.skill_label}>
                            <span>HTML</span>
                            <span>65%</span>
                        </div>
                        <progress value={0.6}></progress>
                        <div className={Style.skill_label}>
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <progress value={0.6}></progress>
                        <div className={Style.skill_label}>
                            <span>JavaScript</span>
                            <span>60%</span>
                        </div>
                        <progress value={0.6}></progress>
                    </div>
                </div>
                <div className={Style.skill}>
                    <h2>Back End</h2>
                    <div className={Style.skill_item}>
                        <div className={Style.skill_label}>
                            <span>Java</span>
                            <span>40%</span>
                        </div>
                        <progress value={0.4}></progress>
                        <div className={Style.skill_label}>
                            <span>Python</span>
                            <span>35%</span>
                        </div>
                        <progress value={0.35}></progress>
                        <div className={Style.skill_label}>
                            <span>MySQL</span>
                            <span>40%</span>
                        </div>
                        <progress value={0.4}></progress>
                    </div>
                </div>
                <div className={Style.skill}>
                    <h2>Soft Skills</h2>
                    <div className={Style.skill_item}>
                        <div className={Style.skill_label}>
                            <span>Motivação</span>
                            <span>100%</span>
                        </div>
                        <progress value={1.0}></progress>
                        <div className={Style.skill_label}>
                            <span>Resiliente</span>
                            <span>95%</span>
                        </div>
                        <progress value={0.95}></progress>
                        <div className={Style.skill_label}>
                            <span>Trabalho em Equipe</span>
                            <span>90%</span>
                        </div>
                        <progress value={0.9}></progress>
                        <div className={Style.skill_label}>
                            <span>Objetividade</span>
                            <span>90%</span>
                        </div>
                        <progress value={0.9}></progress>
                    </div>
                </div>
                <div className={Style.skill}>
                    <h2>Ferramentas</h2>
                    <div className={Style.skill_item}>
                        <div className={Style.skill_label}>
                            <span>Git</span>
                            <span>30%</span>
                        </div>
                        <progress value={0.3}></progress>
                        <div className={Style.skill_label}>
                            <span>AWS</span>
                            <span>15%</span>
                        </div>
                        <progress value={0.15}></progress>
                        <div className={Style.skill_label}>
                            <span>Docker</span>
                            <span>10%</span>
                        </div>
                        <progress value={0.10}></progress>
                       
                    </div>
                </div>
            </section>

        </main>
    )
}