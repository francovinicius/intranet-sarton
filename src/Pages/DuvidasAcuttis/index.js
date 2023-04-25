

export default function DuvidasAcuttis() {
    return (
        <section className="duvidas">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Tire aqui todas as Suas dúvidas relacionadas ao nosso sistema de ponto Acuttis</h1>
                <img src="../assets/img/acuttis.svg" alt="" />
            </div>

            <div className="accordion d-flex flex-column justify-content-center align-items-center" id="accordionExample">

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button accordion-btn collapsed"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Como realizar o download do aplicativo?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <p>Para baixá-lo basta escolher uma das opções abaixo (iOS se você possui um iPhone e
                                Android se possui qualquer outro aparelho com o sistema Android)</p>

                            <div className="d-flex flex-column">
                                <a href="https://apps.apple.com/br/app/acuttis/id1566425357" target="_blank">iOS</a>
                                <a href="https://play.google.com/store/apps/details?id=com.proveusistemas.acuttis"
                                    target="_blank">Android</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Como faço para efetuar o Login?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Passo 1:</strong> Baixe o aplicativo Acuttis na loja de aplicativos do seu smartphone.</p>
                            <p><strong>Passo 2:</strong> Abra o aplicativo e selecione "Entrar".</p>
                            <p><strong>Passo 3:</strong> Digite seu CPF no campo "Login" e "Senha" <strong>(Observação: Sem ponto e sem
                                traço)</strong>.</p>
                            <p><strong>Passo 4:</strong> Clique em "Entrar".</p>
                            <p><strong>Passo 5:</strong> Na tela inicial do aplicativo, selecione "Registro de Ponto".</p>
                            <p><strong>Passo 6:</strong> Selecione "Entrada" ou "Saída" e aguarde a confirmação do registro.</p>
                            <p><strong>Passo 7:</strong> Para verificar o seu registro de ponto, selecione "Meu Ponto" na tela
                                inicial.</p>
                            <p><strong>Passo 8:</strong> Verifique se o registro de entrada e saída está correto.</p>
                            <p><strong>Passo 9:</strong> Ao finalizar o registro de ponto, selecione "Sair" na tela inicial para
                                encerrar a sessão.</p>
                            <p><strong>Caso não tenha cadastro, seguir o passo a passo para cadastro.</strong></p>


                        </div>
                    </div>
                </div>

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Como realizar o cadastramento facial?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Passo 1:</strong> Abra o aplicativo Acuttis e faça login usando o seu CPF e senha.</p>
                            <p><strong>Passo 2:</strong> Na tela inicial do aplicativo, selecione "Cadastrar Rosto".</p>
                            <p><strong>Passo 3:</strong> O aplicativo irá solicitar que você enquadre o seu rosto no quadrado
                                apresentado na tela.</p>
                            <p><strong>Passo 4:</strong> Após tirar a foto normal, o aplicativo solicitará que você tire uma segunda
                                foto, sorrindo.</p>
                            <p><strong>Passo 5:</strong> Selecione o ícone da câmera presente na tela e aguarde a confirmação do
                                registro.</p>
                            <p><strong>Passo 6:</strong> Enquadre novamente o seu rosto no quadrado apresentado na tela e tire a
                                segunda foto sorrindo.</p>
                            <p><strong>Passo 7:</strong> Após tirar as duas fotos, o aplicativo irá analisar as imagens e verificar se
                                a leitura do seu rosto foi bem sucedida.</p>
                            <p><strong>Passo 8:</strong> Caso a leitura do rosto não seja bem sucedida, o aplicativo irá solicitar que
                                você refaça o processo.</p>
                            <p><strong>Passo 9:</strong> Caso a leitura do rosto seja bem sucedida, o aplicativo irá informar que o
                                seu rosto foi cadastrado com sucesso.</p>
                            <p><strong>Passo 10:</strong> Agora, você poderá fazer o registro de ponto por reconhecimento facial,
                                seguindo as instruções do aplicativo.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button accordion-btn collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Quantas marcações preciso realizar?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Com o objetivo de garantir a precisão e segurança do registro de ponto, informamos que serão necessárias
                                4 marcações de ponto diárias.</p>

                            <p><strong>As marcações deverão ser realizadas da seguinte forma:</strong></p>

                            <p><strong>Passo 1:</strong> Entrada: ao chegar na empresa, antes de iniciar as atividades;</p>
                            <p><strong>Passo 2:</strong> Saída para o intervalo de 1 hora: antes de se ausentar para o intervalo de
                                almoço ou jantar, caso haja
                                essa opção na jornada de trabalho;</p>
                            <p><strong>Passo 3:</strong> Retorno do intervalo: ao retornar do intervalo de almoço ou jantar;</p>
                            <p><strong>Passo 4:</strong> Fim do expediente: ao encerrar as atividades do dia e se preparar para sair da
                                empresa.</p>

                            <p>O não cumprimento dessa exigência poderá acarretar em advertências e até mesmo em sanções disciplinares,
                                conforme as normas internas da empresa.
                                Reforçamos que é de responsabilidade individual de cada colaborador realizar as marcações de ponto
                                corretamente e dentro do horário de trabalho estabelecido.
                                Caso tenham dúvidas sobre a utilização do sistema de registro de ponto, favor procurar a equipe
                                responsável pelo RH para orientações adicionais. </p>

                            <p>Atenciosamente,</p>

                            <p>A Administração</p>

                        </div>
                    </div >
                </div >

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button accordion-btn collapsed"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Como informar sobre erro sistêmico no aplicativo:
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <p>Para as adversidades com o APP acuttis, devido a complexidade da necessidade de marcações de ponto
                                precisamos padronizar as sinalizações realizadas em relação às informações de não marcações de ponto.
                                Segue abaixo uma máscara padrão de envio:</p>

                            <p>Assunto: [Reclamação] Erro no sistema de ponto Acuttis</p>

                            <p>Descrição:</p>

                            <p>Olá,</p>

                            <p>Gostaria de informar que ocorreu um erro no sistema de ponto Acuttis do agente <strong>[nome do
                                agente]</strong>. Seguem abaixo os detalhes:</p>

                            <p>Erro ocorrido: <strong>[descreva o erro]</strong></p>

                            <p>Data e hora do ocorrido: <strong>[informe a data e hora em que ocorreu o erro]</strong></p>

                            <p>Ponto precisa ser corrigido? Se sim informar: <strong>[sim, informar horário e qual ponto precisa de
                                alteração/não]</strong></p>

                            <p>Print da tela com o erro para análise: <strong>[insira o print da tela do erro]</strong></p>

                            <p>Vídeo do agente no Timestamp falando sobre o erro, local, hora e data: <strong>[insira o vídeo do agente
                                no Times falando sobre o erro, local, hora e data]</strong></p>



                            <p>Atenciosamente,</p>
                            <p>[Seu nome]</p>
                        </div>

                    </div>
                </div>



            </div >

        </section >
    )
}