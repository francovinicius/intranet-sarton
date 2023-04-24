import style from "./Contacts.css"

export default function () {
    return (
        <section className="contatos" id="contatos">

            <div class="margin"></div>

            <div class="d-flex justify-content-center div-txt-contatos">
                <h2>Entre em contato conosco</h2>
            </div>


            <div class="contatos-juncao">
                <div class="div-email">
                    <form action="https://formsubmit.co/seuemail@email.com" method="POST">
                        <div class="input-group mb-2">
                            <input type="text" name="name" aria-label="First name" class=" form-control bg-dark p-2 text-light"
                                required placeholder="Digite seu nome completo" />
                        </div>
                        <div class="input-group mb-2 ">
                            <input type="email" name="email" aria-label="First name" class="bg-dark p-2 text-light form-control"
                                required placeholder="Digite seu email" />
                        </div>

                        <div class="input-group mb-2">
                            <textarea class="form-control bg-dark p-2 text-light" name="menssage" id="exampleFormControlTextarea1"
                                rows="3" required placeholder="Assunto"></textarea>
                        </div>

                        <button type="button d-flex justify-content-center submit" class="btn btn-contatos"
                           target="blank">Enviar</button>


                        <input type="hidden" name="_subject" value="Novo Contato!"/>
                            <input type="text" name="_honey" className="input-escondido"/>
                                <input type="hidden" name="_captcha" value="false"/>
                                    <input type="hidden" name="_next" value="https://envio-email-por-form.vercel.app/" target="blank" />
                                </form>
                            </div>

                            <div class="middlee">

                                <a class="btnn" href="mailto:viniciusfranco.sarton@gmail.com?subject=Oportunidade&body= ">
                                    <i class="fab fa-google"></i>
                                </a>

                                <a class="btnn" href="https://wa.me/+5521971326631" target="_blank">
                                    <i class="fab fa-whatsapp"></i>
                                </a>

                                <a class="btnn" href="https://www.linkedin.com/company/gruposarton/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>

                            </div>

                        </div>
                    </section>
                    )
}