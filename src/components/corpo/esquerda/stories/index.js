import Story from "./story"

export default function Stories() {
    const userList = [
        '9gag',
        'meowed',
        'barked',
        'nathanwpylestrangeplanet',
        'wawawicomics',
        'respondeai',
        'filomoderna',
        'memeriagourmet'
    ]

    return (
        <div class="stories">
            {userList.map(user => <Story user={user}/>)}

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}