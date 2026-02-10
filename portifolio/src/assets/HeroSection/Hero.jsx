import Style from '../HeroSection/Hero.module.css'

export default function Hero(){
    return(
        <section className={Style.section_hero}>
            <aside className={Style.asideL}>
                <h1>Olá! Meu nome é <span>Leonardo</span></h1>
                <h2><span>03</span>Anos de estudo</h2>

                <button className={Style.icons}>Github</button>
                <button className={Style.icons}>Linkedin</button>
                <button className={Style.icons}>Instagram</button>
            </aside>

            <div className={Style.div_center}>
                <div className={Style.div_img}></div>
            </div>

            <aside className={Style.asideR}>
                <p>Eu crio softwares e amo oque faço</p>
                <h1>Desenvolvedor Web</h1>
            </aside>
        </section>
    )
    
}