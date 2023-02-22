import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const EditPost = ({
    posts,
    handleEdit,
    editTitle,
    editBody,
    setEditTitle,
    setEditBody,
}) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString === id);
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditBody, setEditTitle]);
    return (
        <main className="newPost">
            {editTitle && (
                <>
                    <h2>Edit Post</h2>
                    <form
                        className="newPostForm"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        ></textarea>
                        <button
                            type="submit"
                            onClick={() => handleEdit(post.id)}
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
            {!editTitle && (
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to="/"> Visit Our Homepage</Link>
                    </p>
                </>
            )}
        </main>
    );
};

export default EditPost;
