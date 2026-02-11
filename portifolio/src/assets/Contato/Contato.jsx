import Style from '../Contato/Contato.module.css'
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section className={Style.contatos_page}>

            {/*Informações da Pagina*/}
            <div className={Style.infos}>
                <p className={Style.sobre}>Contato</p>
                <h1>Vamos <span className={Style.span_gradiente}>Conversar</span></h1>
                <p className={Style.subTitulo}>Ferramentas e tecnologias que domino para criar soluções completas.</p>
            </div>

            {/*informações de entrar em contato*/}
            <section className={Style.forma_contato}>
                <aside className={Style.opcao_contato}>
                    <div className={Style.formas_contato}>
                        <h1>Informações de contato</h1>
                        <div className={Style.contato}>
                            <Mail color="#7F35AA" size={28} />
                            <p>Email: </p>
                            <p>leonardop.silva1622@gmail.com</p>
                        </div>
                        <div className={Style.contato}>
                            <Phone color="#7F35AA" size={28} />
                            <p>Whatsapp: </p>
                            <p>(11) 93390-0779</p>
                        </div>
                        <div className={Style.contato}>
                            <MapPin color="#7F35AA" size={28} />
                            <p>Localização: </p>
                            <p>São Paulo - SP</p>
                        </div>
                    </div>
                </aside>

                {/*Preenchimento do Formulario*/}
                <aside className={Style.formulario}>
                    <form action="" className={Style.desgin_form}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Seu nome" className={Style.input} />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="seu@email.com" className={Style.input} />

                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" placeholder="Como posso ajudar?" className={Style.texto}></textarea>

                    </form>


                    <button type="submit" className={Style.btn_enviar}>
                        Enviar Mensagem
                    </button>
                </aside>
            </section>

        </section>


    )
}