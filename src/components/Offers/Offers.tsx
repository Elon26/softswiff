import offersData from "../../mockData/offersData";
import Offer from "./Offer";

const Offers = () => {
    return (
        <section className="offers">
            <h2 className="offers__header mainPage__subtitle">Offers</h2>
            <div className="offers__content">
                {offersData.map(item => (
                    <Offer key={item.position} item={item}/>
                ))}
            </div>
        </section>
    );
};

export default Offers;
