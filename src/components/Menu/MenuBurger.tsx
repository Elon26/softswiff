import { useEffect, useState } from "react";
import { useClickCatcher } from "../../hooks/useClickCatcher";

const MenuBurger = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const {initSwitcher, isClassInFocus} = useClickCatcher(".menuBurger__content", '.menuBurger__icon');

    useEffect(() => {
        if (!isClassInFocus) {
            setIsBurgerOpen(false)
        }
    }, [initSwitcher, isClassInFocus])

    return (
        <div className="menuBurger">
            <button 
                className={`menuBurger__icon ${isBurgerOpen ? 'menuBurger__icon_open' : ''}`} 
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav>
                <ul 
                    className={`menuBurger__content ${isBurgerOpen ? 'menuBurger__content_open' : ''}`}
                >
                    <li>
                        <button className="menuBurger__link">
                            Home
                        </button>
                    </li>
                    <li>
                        <button className="menuBurger__link">
                            Products
                        </button>
                    </li>
                    <li>
                        <button className="menuBurger__link">
                            Cart
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuBurger;
