import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainPage from "../pages/MainPage/MainPage";

const MainLayout = () => {
    return (
        <div className="layout">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
