import { useState } from 'react'
import Style from '../Nav/Nav.module.css'
import Hamburger from 'hamburger-react'

export default function Nav() {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <header className={Style.header_nav}>
            <h1 className={Style.logo}>
                <span className={Style.span_gradiente}>L</span>ero
            </h1>

            {/* A Nav em classe para abrir no mobile */}
            <nav className={`${Style.Nav} ${isOpen ? Style.Nav_aberto : ''}`}>
                <a href="#Hero">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Skills</a>
                <a href="#">Contato</a>
                {/* Botão que só aparece dentro do menu hambúrguer no mobile */}
                <button className={Style.curriculo_buttom_mobile}>Download CV</button>
            </nav>

            <button className={Style.curriculo_buttom}>Download CV</button>

            <div className={Style.menu_icon}>
                <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={25} />
            </div>
        </header>
    )
}