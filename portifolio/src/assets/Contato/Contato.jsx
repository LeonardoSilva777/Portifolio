import Style from '../Contato/Contato.module.css'
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="Contatos" className={Style.contatos_page}>
            <header className={Style.information}>
                <div className={Style.sobre}>Contato</div>
                <h1>Vamos <span className={Style.span_gradiente}>Conversar?</span></h1>
                <p>Se estiver interessado em fazer um projeto ou trabalho, porfavor entre em contato!</p>
            </header>

            <section className={Style.formas_contato}>
                <div className={Style.contatos}>
                    <section className={Style.option}>
                        <h2>Informações de Contato</h2>
                        <div className={Style.tipos}>
                            <div className={Style.icon}>
                                <Mail color="#7e22ce" size={28} />
                            </div>

                            <div className={Style.texto_contato}>
                                <h3>Email</h3>
                                <p>leonardop.silva1622@gmail.com</p>
                            </div>
                        </div>
                        <div className={Style.tipos}>
                            <div className={Style.icon}>
                                <Phone color="#9432cd" size={28} />
                            </div>
                            <div className={Style.texto_contato}>
                                <strong>Telefone:</strong>
                                <p> (11) 93390-0779</p>
                            </div>
                        </div>
                        <div className={Style.tipos}>
                            <div className={Style.icon}>
                                <MapPin color="#9432cd" size={28} />
                            </div>
                            <div className={Style.texto_contato}>
                                <strong>Localização:</strong>
                                <p> São Paulo - SP/ZL</p>
                            </div>
                        </div>
                    </section>

                    <article className={Style.proposta}>
                        <h1>Disponibilidade</h1>
                        <p>Atualmente disponível para projetos freelance e oportunidades full-time.</p>
                    </article>
                </div>

                <div className={Style.formulario}>
                    <Mail color="#22bdce" size={40} />
                    <h1>Formulario</h1>
                    <p>Um formulario para você enviar uma mensagem!</p>
                        <form action="https://formsubmit.co/leonardop.silva1622@gmail.com" method="POST" className={Style.area_forms}>
                            <strong>Nome:</strong>
                            <input type="text" name="name" required placeholder="Seu Nome"></input>
                            <strong>Email:</strong>
                            <input type="email" name="email" required placeholder="Endereço de e-mail"></input>
                            <strong>Mensagem: </strong>
                            <textarea name="message" placeholder="Mensagem"></textarea>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_next" value="portifolio-omega-sand-40.vercel.app"></input>

                            <button type="submit">Enviar</button>
                        </form>
                </div>
            </section>

        </section>


    )
}