import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Logo from "../../images/Logo";
import LogoSmall from "../../images/LogoSmall";
import Menu from "../Menu/Menu";

const Header = () => {
const {isFullScreen} = useWindowDimensions();

    return (
        <header className="header container">
            <button>{isFullScreen ? <Logo/> : <LogoSmall/>}</button>
            <Menu/>
        </header>
    );
};

export default Header;
