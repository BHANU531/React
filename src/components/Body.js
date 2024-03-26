import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);
    
    let [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("fetcing the data")
        const dataFromBackend = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.44986357872513&lng=78.44778899771751&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await dataFromBackend.json();
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-container">
                <div className="searchBar">
                    <input type="text" value={searchText}
                    onChange={(key)=>{
                       setSearchText(key.target.value);
                    }}

                    ></input>
                    <button className="searchBtn"
                      onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
                        restaurant.info.name.toUpperCase().includes(searchText.toUpperCase())
                    );     
                    setFilteredListOfRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button
                    className="filter"
                    onClick={() => {
                        let listOfRestaurantsFiltered = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5);
                        setFilteredListOfRestaurants  (listOfRestaurantsFiltered.sort((a, b) => a.avgRating - b.avgRating));
                    }}

                >Top rated restaurant</button>
            </div>

            {/* 
res-container is container of all the res */}
            <div className="res-container">
                {    
                  filteredListOfRestaurants.map((restaurant) => (<Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}>
                  <RestaurantCard  resProp={restaurant} />
                  </Link>))
                }
            </div>
        </div>)
};

export default Body; 