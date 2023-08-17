
const UserCard = ({post, addPost, visibleButton, defaultHeight}) =>{
    const handleAddPostClick = () => {
        addPost(post);
    };

    return (

<div className="userCard">
<p>Title: {post.title}</p>
    <p>Body: {post.body}</p>
    <p>Tags: {post.tags.map((tag, index) => <span className="tag" key={index}>{tag}</span>)}</p>
    {visibleButton  && defaultHeight !== 100 && <button onClick={handleAddPostClick}>Add post</button>}
</div>
    )

}

export default UserCard;