export default function Post({ postData }) {
    const { user, photo, likedBy, likesQty} = postData;

    return (
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${user}.svg`} />
                        {user}
                        </div>
                        <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={`assets/img/${photo}.svg`} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src={`assets/img/${likedBy}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras {likesQty} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>
    )
}