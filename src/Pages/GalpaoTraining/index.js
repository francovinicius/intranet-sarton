import style from "./GalpaoTraining.css"

export default function GalpaoTraining() {
    return (

        <section>
            <h2 className="training-tittle">Treinamento Lasa</h2>

        <div className="d-flex justify-content-center">
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-training" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./assets/img/Treinamento-Lasa/00000.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00001.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00002.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00003.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00004.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00005.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00006.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00007.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00008.svg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/img/Treinamento-Lasa/00009.svg" className="d-block w-100" alt="..." />
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