import { CDN_URL } from "../util/constants";

const RestaurantCard = (packedPropObject) => {

    const { resProp } = packedPropObject;
    console.log(resProp["name"]);
    const inlineStyle = {
        'backgroundColor': "#f0f0f0"
    };

    const {name,cuisines,avgRating,sla,costForTwo} = resProp?.card?.card?.info;

    return (

        <div className="res-card" style={inlineStyle}>
            <img src={CDN_URL + resProp.card.card.info.cloudinaryImageId} alt="item-img" className="item-img" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>)

};

export default RestaurantCard;