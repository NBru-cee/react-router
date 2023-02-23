import About from "./About";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
    return (
        <div className="App">
            <Header title="React js Blog" />
            <DataProvider>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/post" element={<NewPost />} />
                    <Route exact path="/edit/:id" element={<EditPost />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Missing />} />
                </Routes>
            </DataProvider>
            <Footer />
        </div>
    );
}

export default App;
