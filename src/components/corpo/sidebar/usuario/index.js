export default function Usuario({ userData }) {
    const { username, name } = userData;

    return (
        <div class="usuario">
            <img src={`assets/img/${username}.svg`} />
            <div class="texto">
                <strong>username</strong>
                {name}
            </div>
        </div>
    )
}