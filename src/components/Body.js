import RestaurantCard from "./RestaurantCard";

import resListFromBackend from "../util/mockData";
import { useState } from "react";





const Body = () => {
    let [listOfRestaurants,setListOfRestaurants] = useState(resListFromBackend);
    return (
        <div className="body">
            <div className="filter-container">
                <button
                    className="filter-btn"
                    onClick={() => {
                        listOfRestaurantsFiltered = listOfRestaurants.filter((restaurant) =>
                            restaurant.card.card.info.avgRating >=   4.0);
                        setListOfRestaurants(listOfRestaurantsFiltered);    
                    }}>Top rated restaurant</button>
            </div>

            {/* 
res-container is container of all the res */}
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant, index) => (<RestaurantCard key={restaurant.card.card.info.id} resProp={restaurant} />))
                }
            </div>
        </div>)
};


export default Body; 