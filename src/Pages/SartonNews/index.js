import styles from './SartonNews.css'

export default function SartonNews() {
    return (
        <div>
            <div className='sarton-news d-flex flex-column justify-content-center align-items-center'>
                <h1>Nosso mais novo portal de noticias</h1>
                <img className='' src='./assets/img/sarton-news.svg' />
            </div>

            <div className="accordion-news accordion d-flex flex-column justify-content-center align-items-center" id="accordionExample">

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

                            <p>A Sarton News é uma página dedicada a fornecer notícias atualizadas e relevantes para os membros da sua organização. Seu objetivo principal é manter os funcionários informados sobre os acontecimentos internos e externos que podem impactar seu trabalho e a empresa como um todo.</p>

                        </div>
                    </div>
                </div>


                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            O que você encontrará?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                Nesta página, você encontrará uma variedade de categorias de notícias, como atualizações da empresa, anúncios de produtos, eventos internos, histórias de sucesso de funcionários e notícias do setor. Cada categoria contará com artigos bem escritos e concisos, projetados para transmitir informações importantes de maneira clara e direta.
                            </p>
                            <p>
                                Além disso, a Sarton News também oferecerá recursos multimídia, como fotos e vídeos, para enriquecer a experiência de leitura e tornar as notícias mais envolventes. Isso permitirá que os funcionários visualizem os eventos e os projetos em destaque de maneira mais imersiva.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="accordion-item accordion-itens">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Atualizações
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                                <p>
                                    A página será atualizada regularmente com conteúdo fresco e relevante, garantindo que os funcionários estejam sempre atualizados sobre os desenvolvimentos mais recentes da empresa. Além disso, a Sarton News também poderá enviar notificações por e-mail ou mensagens internas para alertar os funcionários sobre notícias urgentes ou eventos importantes.
                                </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}