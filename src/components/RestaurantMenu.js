import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    let[menuData,setMenuData] = useState(null);
    let {rid} = useParams();
    console.log(rid);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.44986357872513&lng=78.44778899771751&restaurantId=" + rid);
        const jsonData = await menu.json();
     
        // console.log(jsonData.data.cards[2].card.card.info)
        setMenuData(jsonData)
     };
     console.log(menuData);
     if(menuData === null){
        return <Shimmer/>
     }
     console.log(menuData);
    
    const {name , cuisines} = menuData?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
 
    const makeListItem = (item)=>{
        return (<li style={{fontFamily : "cursive" , wordSpacing: "5px"}}>
            {item?.card?.info?.name} - {"Rs : " + item.card.info.price/100}
        </li>
        
        );
    }
    
    return (
        <div>
          <h1>{name}</h1>
          <h2>{cuisines.join(", ")}</h2>

          <ul>
            {
                itemCards?.map(item => makeListItem(item))
            }
          </ul>
        </div>

    );
}

export default RestaurantMenu;