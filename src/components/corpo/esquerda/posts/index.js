import Post from "./post"

export default function Posts() {
    const postList = [
        {
            user: 'meowed',
            photo: 'gato-telefone',
            likedBy: 'respondeai',
            likesQty: 101.523
        },

        {
            user: 'barked',
            photo: 'dog',
            likedBy: 'adorable_animals',
            likesQty: 99.159
        }
    ]

    return (
        <div class="posts">
            {postList.map(postData => <Post postData={postData}/>)}
        </div>
    )
}