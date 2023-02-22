import About from "./About";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
function App() {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filteredResults);
    }, [posts, search]);

    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);

    const handleDelete = (id) => {
        const postList = posts.filter((post) => post.id !== id);
        setPosts(postList);
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = { id, title: postTitle, datetime, body: postBody };
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle("");
        setPostBody("");
        // navigate("/");
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
