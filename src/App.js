import About from "./About";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Home />
            <About />
            <NewPost />
            <PostPage />
            <Missing />
            <Footer />
        </div>
    );
}

export default App;
