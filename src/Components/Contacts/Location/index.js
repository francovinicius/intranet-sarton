import styles from "./Location.css"
export default function Location() {
    return (
        <div className="location d-flex flex-column justify-content-center align-items-center">
            <h3>Como chegar</h3>

            <span>Para dúvidas, entregas de cartões, documentações, exames entre outras atividades conte também com nosso atendimento presencial.</span>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.6491838476663!2d-43.6038323237867!3d-22.852465235933575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be2f8deae61b7%3A0x7650adf55500ce04!2sSarton%20Parque%20%C3%89%20Melhor%20Prevenir!5e0!3m2!1spt-BR!2sbr!4v1687179266820!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}