import styles from "./Mod19.css"

export default function Mod19 () {
    return (
        <section className="duvidas">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Tire aqui todas as Suas dúvidas relacionadas ao nosso Modelo 19</h1>
                <img src="../assets/img/logo.svg" alt="" />
            </div>

            <div className="accordion d-flex flex-column justify-content-center align-items-center" id="accordionExample">

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button accordion-btn collapsed"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            O que é?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <p>O modelo 19 é um documento oficial utilizado em situações em que um trabalhador não conseguiu marcar
                                seu ponto de entrada ou saída no sistema eletrônico da empresa, seja por esquecimento ou por algum
                                problema sistêmico.</p>
                            <p>
                                Este documento é importante pois permite que o trabalhador possa comprovar o seu horário de trabalho e
                                evitar que haja qualquer tipo de desconto em seu salário.
                                Ao utilizar o modelo 19, o trabalhador deve preencher as informações necessárias (descritas abaixo),
                                além de justificar o motivo pelo qual não foi possível registrar seu ponto. É importante ressaltar que o
                                preenchimento do modelo 19 deve ser realizado de forma correta e honesta,
                                pois caso contrário, pode haver penalidades para o trabalhador.
                            </p>

                        </div>
                    </div>
                </div>


                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Como preencher?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                <strong>
                                    [Agente]
                                </strong>
                            </p>

                            <p>
                                Reúna as informações necessárias: <strong>nome completo, matrícula, RG, CPF e operação em que
                                    trabalha</strong>

                                Identifique o dia da ocorrência e preencha as informações de hora nos campos correspondentes: entrada 1,
                                saída 1, entrada 2, saída 2

                                Escolha a justificativa adequada para a ocorrência, entre esquecimento ou outros (em caso de outros,
                                descreva a justificativa no verso do documento)

                                Preencha a data de preenchimento do documento

                                Assine o documento

                                Entregue o documento para o gerente responsável
                            </p>
                            
                            <p>
                                <strong>
                                    [Gerente]
                                </strong>

                                Certifique-se de que todas as informações estão corretas e legíveis antes de enviar o documento

                                Assine o document

                                Envie o modelo 19 preenchido e assinado para o grupo de justificativas e em seguida entregue o documento
                                ao EAA.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Baixe o PDF do arquivo aqui
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <a href=""><img src="../assets/img/pages/icon-pdf.svg" alt="mod19" /></a>
                                <p>
                                    Baixe o mod 19 clicando no icone acima
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                                                            
                                                            )
}