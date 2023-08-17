const AddedUserCard = ({post, removePost}) =>{
    return (
        <div className="addedCard">
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <p>
                Tags: {post.tags && post.tags.map((tag, index) => <span className="tag" key={index}>{tag}</span>)}
            </p>
            <button onClick={() => removePost(post)}>Remove Post</button>
        </div>
    )
}

export default AddedUserCard