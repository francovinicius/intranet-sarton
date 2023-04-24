import styles from "./Presentation.css"

export default function Presentation() {
    return (
        <section class="apresentacao" id="apresentacao">

            <div class="div-apresentacao">
                <div class="texto-apresentacao">
                    <h2>Chegou agora a Intranet</h2>
                    <p>A Intranet é uma rede de uso exclusivo da nossa organização. Essa tecnologia facilita a
                        comunicação, permitindo que os funcionários troquem informações de maneira mais rápida entre os
                        departamentos.</p>
                    <p>Nossa Intranet será nossa principal fonte de propagação de informações (Exames periódicos,
                        alterações em nossa Normas e Diretrizes, etc), então, você funcionário fique ligado
                        diáriamente para obter informações importantes em tempo real.</p>
                </div>
                <img class="img-apresentacao" src="./assets/img/apresentação/data-bro.svg" alt="Automatizar relatórios"/>
            </div>

            <div class="display-menor div-apresentacao">
                <div class="texto-apresentacao">
                    <h2>Comunicação melhorada </h2>
                    <p>A Intranet elimina o incômodo de comunicação dentro da organização, fornecendo aos usuários uma
                        rede centralizada que permite mensagens rápidas e eficientes.</p>
                </div>
                <img class="img-apresentacao" src="./assets/img/apresentação/data-panel.svg" alt="Automatizar relatórios"/>
            </div>

            <div class="display-maior div-apresentacao">

                <img class="img-apresentacao" src="./assets/img/apresentação/data-panel.svg" alt="Automatizar relatórios"/>
                    <div class="texto-apresentacao">
                        <h2>Comunicação melhorada </h2>
                        <p>A Intranet elimina o incômodo de comunicação dentro da organização, fornecendo aos usuários uma
                            rede centralizada que permite mensagens rápidas e eficientes.</p>
                    </div>
            </div>

            <div class="div-apresentacao">
                <div class="texto-apresentacao">
                    <h2>Colaboração aprimorada</h2>
                    <p>A Intranet ajuda a facilitar o trabalho colaborativo em sua organização e garante que todos
                        estejam atualizados.</p>
                </div>
                <img class="img-apresentacao" src="./assets/img/apresentação/Analysis-amico.svg" alt="Automatizar relatórios"/>
            </div>
            <div class="margin"></div>
        </section>
    )
}