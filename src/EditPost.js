import { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import api from "./api/post";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
const EditPost = () => {
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditBody, setEditTitle]);

    const handleEdit = async (id) => {
        const datatime = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = {
            id,
            title: editTitle,
            datatime,
            body: editBody,
        };
        try {
            const response = await api.put(`/edit/${id}`, updatedPost);
            setPosts(
                posts.map((post) =>
                    post.id === id ? { ...response.data } : post
                )
            );
            setEditBody("");
            setEditTitle("");
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };
    return (
        <main className="NewPost">
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
                            Edit
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
