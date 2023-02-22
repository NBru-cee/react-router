import About from "./About";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./api/post";
function App() {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filteredResults);
    }, [posts, search]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts");
                setPosts(response.data);
            } catch (error) {
                if (error.respone) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.Headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${posts.id}`);
            const postList = posts.filter((post) => post.id !== id);
            setPosts(postList);
            navigate("/");
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = { id, title: postTitle, datetime, body: postBody };
        try {
            const response = await api.post("/posts", newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle("");
            setPostBody("");
            navigate("/");
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    const handleEdit = async (id) => {
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(
                posts.map((post) =>
                    post.id === id ? { ...response.data } : post
                )
            );
            setEditBody("");
            setEditTitle("");
            navigate("/");
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    return (
        <div className="App">
            <Header title="React js Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Routes>
                <Route exact path="/" element={<Home posts={searchResult} />} />
                <Route
                    exact
                    path="/post"
                    element={
                        <NewPost
                            handleSubmit={handleSubmit}
                            setPostBody={setPostBody}
                            postBody={postBody}
                            postTitle={postTitle}
                            setPostTitle={setPostTitle}
                        />
                    }
                />
                <Route
                    
                    path="/edit/:id"
                    element={
                        <EditPost
                            posts={posts}
                            handleEdit={handleEdit}
                            editBody={editBody}
                            editTitle={editTitle}
                            setEditBody={setEditBody}
                            setEditTitle={setEditTitle}
                        />
                    }
                />
                <Route
                    path="/post/:id"
                    element={
                        <PostPage posts={posts} handleDelete={handleDelete} />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
