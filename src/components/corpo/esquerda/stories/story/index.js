export default function Story({ user }) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${user}.svg`} />
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>
    )
}