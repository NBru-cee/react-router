import { useStoreState } from "easy-peasy";
const Footer = () => {
    const today = new Date();
    const postCount = useStoreState((state) => state.postCount);
    return (
        <footer className="Footer">
            <p style={{ textAlign: "center" }}>{postCount} Blog Posts</p>
            <p>Copyright &copy; {today.getFullYear()} Bruce Inc.</p>
        </footer>
    );
};

export default Footer;
