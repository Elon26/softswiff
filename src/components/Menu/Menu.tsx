import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import MenuBurger from "./MenuBurger";
import MenuSimple from "./MenuSimple";

const Menu = () => {
    const {isMobileScreen} = useWindowDimensions();

    return (
        <div className="menu">
            {isMobileScreen ? <MenuBurger/> : <MenuSimple/>}
        </div>
    );
};

export default Menu;
