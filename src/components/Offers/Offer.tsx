import { OffersDataItem } from "../../models/models";
import Button from "../UI/Button/Button";

interface Props {
    item: OffersDataItem;
}

const Offer = ({item}: Props) => {
    return (
        <article className={`offer offer_${item.position} offer_${item.size}`}>
            <div className="offer__bg">
                <div className="offer__vail"/>
                <div className="offer__image" />
            </div>
            <div className="offer__content">
                <div className="offer__title">{item.title}</div>
                <div className="offer__subtitle">{item.subtitle}</div>
                <Button text="Learn more" fill={false}/>
            </div>
        </article>
    );
};

export default Offer;
