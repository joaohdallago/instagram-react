import Sugestao from "./sugestao"

export default function Sugestoes() {   
    const suggestionsList = [
        {
            username: 'bad.vibes.memes',
            reason: 'Segue você'
        },

        {
            username: 'chibirdart',
            reason: 'Segue você'
        },

        {
            username: 'razoesparaacreditar',
            reason: 'Novo no Instagram'
        },

        {
            username: 'adorable_animals',
            reason: 'Segue você'
        },

        {
            username: 'smallcutecats',
            reason: 'Segue você'
        },
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionsList.map(suggestionData => <Sugestao suggestionData={suggestionData}/>)}
        </div>
    )
}