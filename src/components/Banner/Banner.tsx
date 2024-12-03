import Button from "../UI/Button/Button";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container banner__content">
                <h1 className="banner__title">
                    <p>Discover the vast</p>
                    <p>expanses of <span className="banner__title_colored">space</span></p>
                </h1>
                <div className="banner__subtitle">
                    Where the possibilities are <span className="banner__subtitle_colored">endless!</span>
                </div>
                <Button text='Learn more' fill={true}/>
            </div>
        </section>
    );
};

export default Banner;
