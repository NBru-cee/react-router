import { createStore, action, computed, thunk } from "easy-peasy";
import api from "./api/post";
export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),
    postTitle: "",
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: "",
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: "",
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: "",
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: "",
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResult: [],
    setSearchResult: action((state, payload) => {
        state.searchResult = payload;
    }),
    postCount: computed((state) => state.posts.length),
    setPostById: computed((state) => (id) => {
        return state.posts.find((post) => post.id.toString() === id);
    }),
    getPostById: computed((state) => (id) => {
        return state.posts.find((post) => post.id.toString() === id);
    }),

    savePost: thunk(async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();
        try {
            const response = await api.post("/posts", newPost);
            actions.setPosts([...posts, response.data]);
            actions.setPostTitle("");
            actions.setPostBody("");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    deletePost: thunk(async (actions, id, helpers) => {
        const { posts } = helpers.getState();

        try {
            await api.delete(`/posts/${id}`);

            actions.setPosts(posts.filter((post) => post.id.toString() !== id));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),

    editPost: thunk(async (actions, { updatedPost, id }, helpers) => {
        const { posts } = helpers.getState();

        try {
            const response = await api.put(`/edit/${id}`, updatedPost);

            actions.setPosts(
                posts.map((post) =>
                    post.id === id ? { ...response.data } : post
                )
            );
            actions.setEditBody("");
            actions.setEditTitle("");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
});
