import style from "./Header.css"

export default function Header() {
    return (
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">
                    <img src="./assets/img/logo.svg" alt="Logo Sarton" width="100" height="40"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#info-gerais">Informações Gerais</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Ambev</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Lojas Americanas</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Mercado Princesa</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
)}