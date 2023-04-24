import styles from "./InfoGerais.css"
import Presentation from "./Presentation"


export default function () {
    return (
        <div>

            <Presentation />

            <section className="info-gerais" id="info-gerais">
            <h2>Informações Gerais</h2>

            <div className="div-card-info d-flex justify-content-center" id="acuttis-tutoriais">

                <div className="card mb-3 card-info card-style">
                    <div className="row div-column g-0">
                        <div className="div-img col-md-4">
                            <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" id="normas-diretrizes">
                                <a href="./pages/organograma.html">
                                    <h5 className="card-title">Organograma Sarton</h5>
                                </a>
                                <p className="card-text">O organograma é uma ferramenta visual que representa a hierarquia e a estrutura de uma empresa ou organização.</p>
                                <p className="card-text"><small className="text-muted">Last updated: 04 april 2023</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 card-info card-style">
                    <div className="row div-column g-0">
                        <div className="div-img col-md-4">
                            <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" id="normas-diretrizes">
                                <a href="">
                                    <h5 className="card-title">Normas e diretrizes</h5>
                                </a>
                                <p className="card-text">Este é um cartão mais amplo com texto de apoio abaixo como uma entrada natural para
                                    conteúdo adicional. Este conteúdo é um pouco mais longo.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3 card-info card-style">
                    <div className="row div-column g-0">
                        <div className="div-img col-md-4">
                            <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" id="normas-diretrizes">
                                <a href="./pages/mod19.html">
                                    <h5 className="card-title">Mod 19</h5>
                                </a>

                                <p className="card-text">Modelo 19 saiba o que é e como preenchê-lo corretamente no link acima.</p>
                                <p className="card-text"><small className="text-muted">Last updated: 14 march 2023</small></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3 card-info card-style">
                    <div className="row div-column g-0">
                        <div className="div-img col-md-4">
                            <img src="/assets/img/acuttis.svg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" id="duvidas-acuttis">
                                <a href="./pages/duvidas-frequentes-acuttis.html">
                                    <h5 className="card-title">Duvidas Frequentes</h5>
                                </a>
                                <p className="card-text">Problemas com o sistema de ponto? Acesse suporte para obter ajuda no link acima.</p>
                                <p className="card-text"><small className="text-muted">Last updated: 07 march 2023</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </section>
        </div>
        
    )
}