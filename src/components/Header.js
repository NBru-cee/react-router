import { FaLaptop, FaTabletAlt, FaMobileAlt, FaDesktop } from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";
const Header = ({ title }) => {
    const { width } = useWindowSize();
    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ? (
                <FaMobileAlt />
            ) : width < 992 ? (
                <FaTabletAlt />
            ) : width < 1500 ? (
                <FaLaptop />
            ) : (
                <FaDesktop />
            )}
        </header>
    );
};

export default Header;
