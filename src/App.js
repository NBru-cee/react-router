import About from "./About";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "My First Post",
            datetime: "July 01, 2023 11:17:36 AM",
            body: "Important People come and go, and okay",
        },
        {
            id: 2,
            title: "My Second Post",
            datatime: "July 01, 2023 11:17:36 AM",
            body: "Unfortunately, the most important people in your life can become strangers overnight",
        },
        {
            id: 3,
            title: "My 3rd Post",
            datatime: "July 01, 2023 11:17:36 AM",
            body: "I try to differentiate an intelligent person from one that simply has common sense",
        },
        {
            id: 4,
            title: "My 3rd Post",
            datatime: "July 01, 2023 11:17:36 AM",
            body: "As the question doesn't contain the parenthesis so we can assume two conditions",
        },
    ]);
    const [searchResult, setSearchResult] = useState([]);
    return (
        <div className="App">
            <Header title="React js Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Routes>
                <Route exact path="/" element={<Home posts={posts} />} />
                <Route exact path="/post" element={<NewPost />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
