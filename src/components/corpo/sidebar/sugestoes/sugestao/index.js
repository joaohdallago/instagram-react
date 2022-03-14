export default function Sugestao({ suggestionData }) {
    const { username, reason } = suggestionData;

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${username}.svg`} />
                <div class="texto">
                <div class="nome">{username}</div>
                <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}