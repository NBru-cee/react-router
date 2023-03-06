import About from "./components/About";
import EditPost from "./components/EditPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";
function App() {
    const { data, fetchError, isLoading } = useAxiosFetch(
        "http://localhost:3500/posts"
    );
    const setPosts = useStoreActions((actions) => actions.setPosts);
    useEffect(() => {
        setPosts(data);
    }, [data, setPosts]);

    return (
        <div className="App">
            <Header title="Bruce Inc." />
            <Nav />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home isLoading={isLoading} fetchError={fetchError} />
                    }
                />
                <Route exact path="/post" element={<NewPost />} />
                <Route exact path="/edit/:id" element={<EditPost />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
