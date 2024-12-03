import Banner from "../../components/Banner/Banner";
import Embark from "../../components/Embark/Embark";
import Offers from "../../components/Offers/Offers";

const MainPage = () => {
    return (
        <main className="mainPage">
            <Banner/>
            <div className="mainPage__mainContent container">
                <Offers/>
                <Embark/>
            </div>
        </main>
    );
};

export default MainPage;
