import Cart from "../../images/Cart";
import CartGradient from "../../images/CartGradient";

const MenuSimple = () => {
    return (
        <nav>
            <ul className="menuSimple">
                <li>
                    <button className="menuSimple__link">
                        <span className="menuSimple__linkText_withoutGradient">Home</span>
                        <span className="menuSimple__linkText_withGradient">Home</span>
                    </button>
                </li>
                <li>
                    <button className="menuSimple__link">
                        <span className="menuSimple__linkText_withoutGradient">Products</span>
                        <span className="menuSimple__linkText_withGradient">Products</span>
                    </button>
                </li>
                <li>
                    <button className="menuSimple__link">
                        <span className="menuSimple__linkText_withoutGradient"><Cart/></span>
                        <span className="menuSimple__linkText_withGradient"><CartGradient/></span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default MenuSimple;
