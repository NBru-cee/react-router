import { Link } from "react-router-dom";
const Post = ({ post }) => {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datatime}</p>
            </Link>
            <p className="postBody">
                {post.body.length <= 35
                    ? post.body
                    : `${post.body.slice(0, 35)}....`}
            </p>
        </article>
    );
};

export default Post;
