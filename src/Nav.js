import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
const Nav = () => {
    const posts = useStoreState((state) => state.posts);
    const setSearchResult = useStoreActions(
        (actions) => actions.setSearchResult
    );
    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);

    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filteredResults);
    }, [posts, search, setSearchResult]);

    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
