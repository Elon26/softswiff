import { useState } from "react";

const Embark = () => {
    const [isReadMoreClicked, setIsReadMoreClicked] = useState(false)

    return (
        <section className="embark">
            <h2 className="embark__header mainPage__subtitle">Embark on a space journey</h2>
            <div className="embark__content">
                <p>
                    Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
                </p>
                <p className={isReadMoreClicked ? "" : "invisible"}>
                    Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
                </p>
            </div>
            <button 
                className={`embark__button ${isReadMoreClicked ? "invisible" : ""}`}
                onClick={() => setIsReadMoreClicked(true)}
            >
                Read more
            </button>
        </section>
    );
};

export default Embark;
