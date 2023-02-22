const NewPost = ({
    handleSubmit,
    postBody,
    setPostBody,
    postTitle,
    setPostTitle,
}) => {
    return (
        <main className="newPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default NewPost;
