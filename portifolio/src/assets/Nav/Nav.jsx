import { useState } from 'react'
import Style from '../Nav/Nav.module.css'
import Hamburger from 'hamburger-react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
    const [isOpen, setOpen] = useState(false)

    const closeMenu = () => setOpen(false);

    return (
        <header className={Style.header_nav}>
            <h1 className={Style.logo}>
                <span className={Style.span_gradiente}>L</span>ero
            </h1>


            <nav className={`${Style.Nav} ${isOpen ? Style.Nav_aberto : ''}`}>
                <Link smooth to="#Hero" onClick={closeMenu} activeClassName={Style.link_ativo}>Home</Link>
                <Link smooth to="#Sobre" onClick={closeMenu} activeClassName={Style.link_ativo}>Sobre</Link>
                <Link smooth to="#Skills" onClick={closeMenu} activeClassName={Style.link_ativo}>Skills</Link>
                <Link smooth to="#Projetos" onClick={closeMenu} activeClassName={Style.link_ativo}>Projetos</Link>
                <Link smooth to="#Contatos" onClick={closeMenu} activeClassName={Style.link_ativo}>Contato</Link>
                <a
                    href="/curriculo-leonardo.pdf"
                    download="Curriculo_Leonardo_Silva.pdf"
                    className={Style.curriculo_buttom_mobile}
                    onClick={closeMenu}
                >
                    Download CV
                </a>
            </nav>

            <a href="/curriculo-leonardo.pdf" download="Curriculo_Leonardo_Silva.pdf" className={Style.curriculo_buttom}>
                Download CV
            </a>
            <div className={Style.menu_icon}>
                <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={25} />
            </div>
        </header>
    )
}