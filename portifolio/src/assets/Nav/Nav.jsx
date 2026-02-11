import Style from '../Nav/Nav.module.css'

export default function Nav() {
    return(
        <header className={Style.header_nav}>
            <h1><span className={Style.span_gradiente}>L</span>ero</h1>
            <nav className={Style.Nav}>
            <a href="#Hero">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Projetos</a>
            <a href="#">Skills</a>
            <a href="#">Contato</a>
        </nav>
        <button className={Style.curriculo_buttom}>Download CV</button>
        </header>
        
    )
}