import Usuario from "./usuario";
import Sugestoes from "./sugestoes";

export default function Sidebar() {
    const userData = {
        username: 'catanacomics',
        name: 'Catana'
    }

    return (
        <div class="sidebar">
            <Usuario userData={userData}/>
            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}