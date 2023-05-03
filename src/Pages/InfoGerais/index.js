import Birthdays from "./Birthdays"
import styles from "./InfoGerais.css"
import Presentation from "./Presentation"


export default function () {
    return (

            <section className="info-gerais" id="info-gerais">
                <Presentation />

                <h2>Informações Gerais</h2>

                <div className="div-card-info d-flex justify-content-center" id="acuttis-tutoriais">

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/treinamentogalpao">
                                        <h5 className="card-title text-center">Treinamento - Lasa Galpão</h5>
                                    </a>
                                    <p className="card-text">Card informativo sobre os treinamentos internos da empresa.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 25-04-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/">
                                        <h5 className="card-title text-center">Normas e diretrizes</h5>
                                    </a>
                                    <p className="card-text">Página em construção.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/mod19">
                                        <h5 className="card-title text-center">Mod 19</h5>
                                    </a>

                                    <p className="card-text">Modelo 19 saiba o que é e como preenchê-lo corretamente no link acima.</p>
                                    <p className="card-text"><small className="text-muted">Last updated: 14-03-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="/assets/img/acuttis.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="duvidas-acuttis">
                                    <a href="/duvidasaccutis">
                                        <h5 className="card-title text-center">Duvidas Frequentes</h5>
                                    </a>
                                    <p className="card-text">Problemas com o sistema de ponto? Acesse suporte para obter ajuda no link acima.</p>
                                    <p className="card-text"><small className="text-muted">Last updated: 07-03-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Birthdays />

            </section>


    )
}