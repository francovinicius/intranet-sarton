import style from "./Marketing.css"

export default function () {
    return (
        <section class="marketing" is="marketing">

            <div class="card border-light text-center mb-3 btn-sm cd-border">
                <img src="./assets/img/logo.svg" class="card-img-top" alt="Logo da Sarton" />
                <div class="card-body">
                    <h5 class="card-title">Normas e Diretrizes</h5>
                    <p class="card-text">Clique no botão abaixo para acessar todo o conteúdo relacionado.</p>
                    <a href="#normas-diretrizes"><button type="button" class="btn btn-primary">
                        Vizualizar Conteúdo
                    </button></a>

                </div>

            </div>

            <div class="card border-light text-center mb-3 btn-sm cd-border">
                <img src="./assets/img/acuttis.svg" class="card-img-top" alt="Logo da Sarton" />
                <div class="card-body">
                    <h5 class="card-title">Dúvidas Frequentes</h5>
                    <p class="card-text">Clique no botão abaixo para acessar todo o conteúdo relacionado.</p>
                    <a href="./pages/duvidas-frequentes-acuttis.html">
                        <button type="button" class="btn btn-primary" data-bs-target="#Info-gerais">
                            Vizualizar Conteúdo
                        </button>
                    </a>
                </div>

            </div>

            <div class="card border-light text-center mb-3 btn-sm cd-border">
                <img src="./assets/img/acuttis.svg" class="card-img-top" alt="Logo do Acuttis" />
                <div class="card-body">
                    <h5 class="card-title">Acuttis Download</h5>
                    <p class="card-text">Clique no botão abaixo para acessar todo o conteúdo relacionado a download.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Vizualizar Conteúdo
                    </button>
                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Acuttis</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>O Acuttis é o nosso aplicativo de ponto, através dele você efetua as marcações
                                    necessárias para completar o seu dia (4 marcações).
                                </p>
                                <p>Para acessá-lo utilize seu CPF sem ponto e sem traço tanto para o login quanto para a
                                    senha.</p>
                                <br />
                                <p>Para baixá-lo basta escolher uma das opções abaixo (iOS se você possui um iPhone e
                                    Android se possui qualquer outro aparelho com o sistema Android)</p>
                                <div class="d-flex flex-column">
                                    <a href="https://apps.apple.com/br/app/acuttis/id1566425357" target="_blank">iOS</a>
                                    <a href="https://play.google.com/store/apps/details?id=com.proveusistemas.acuttis"
                                        target="_blank">Android</a>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-light text-center mb-3 btn-sm cd-border">
                <img src="./assets/img/logo.svg" class="card-img-top" alt="Logo da Sarton" />
                <div class="card-body">
                    <h5 class="card-title">Site / E-mail</h5>
                    <p class="card-text">Clique no botão abaixo para acessar todo o conteúdo relacionado.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        Vizualizar Conteúdo
                    </button>
                </div>



                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel2">Site/WebMail</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Seguem abaixo os links relacionados ao Site e Webmail.</p>

                                <div class="d-flex flex-column">
                                    <a href="https://sarton.com.br/" target="_blank">Site</a>
                                    <a href="https://host74.hoteldaweb.com.br:2096/" target="_blank">Webmail</a>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="margin"></div>



        </section>
    )
}