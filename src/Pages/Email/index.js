import styles from './AssEmail.css'

export default function AssEmail() {
    return (
        <section>
            <h2 className="training-tittle">Passo a Passo: Assinatura de E-mail</h2>

        <div className="d-flex justify-content-center">
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-training" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-1.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-2.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-3.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-4.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-5.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-6.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Slide-Ass/image-7.svg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Voltar</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Avançar</span>
            </button>
        </div>
        </div>
        </section>
    )
}