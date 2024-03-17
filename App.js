import React from "react";
import ReactDOM from "react-dom/client";


const inlineStyle = {
    'backgroundColor': "#f0f0f0"
};


const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" alt="img" className="logo" />
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>ContactUs</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
);

const RestaurantCard = (props) => {

    const { resProp } = props;
    console.log(resProp["name"]);

    const {name,cuisines,avgRating,sla,costForTwo} = resProp?.card?.card?.info;

    return (

        <div className="res-card" style={inlineStyle}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resProp.card.card.info.cloudinaryImageId} alt="item-img" className="item-img" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>)

};


const resListFromBackend = [{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "439421",
                "name": "Aroma Family Restaurant",
                "cloudinaryImageId": "8e3123d28459fe152093bc6a62b0b5ca",
                "locality": "Saroor Nagar West",
                "areaName": "Saroor Nagar West",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Biryani",
                    "Barbecue",
                    "Indian",
                    "Chinese",
                    "Tandoor",
                    "Mughlai",
                    "Arabian"
                ],
                "avgRating": 3.5,
                "parentId": "13995",
                "avgRatingString": "3.5",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=11970217~p=2~eid=0000018e-4896-be17-1b23-5be500e30271~srvts=1710614822423~83649",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 10.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "10.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-17 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.7",
                        "ratingCount": "500+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=439421&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "81649",
                "name": "Syala Kitchen",
                "cloudinaryImageId": "8c1c953033e8679c062b620016444982",
                "locality": "Jubilee Hills",
                "areaName": "Jubilee Hills",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Tandoor",
                    "Biryani",
                    "Arabian",
                    "Indian",
                    "South Indian"
                ],
                "avgRating": 3.9,
                "parentId": "8975",
                "avgRatingString": "3.9",
                "totalRatingsString": "10K+",
                "promoted": true,
                "adTrackingId": "cid=11986340~p=3~eid=0000018e-4896-be17-1b23-5be600e30352~srvts=1710614822423~83649",
                "sla": {
                    "deliveryTime": 46,
                    "lastMileTravel": 11,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "11.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-17 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "ABOVE ₹1000",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=81649&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "496680",
                "name": "Shree Golden Palace Restaurant",
                "cloudinaryImageId": "yhidqtj01vavz0wr7dty",
                "locality": "Mahesh Nagar",
                "areaName": "Mehdipatnam",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Indian",
                    "Chinese",
                    "Biryani"
                ],
                "avgRating": 4,
                "parentId": "297690",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 1.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-17 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textExtendedBadges": {},
                        "textBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=496680&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "74646",
                "name": "Riyan Hotel",
                "cloudinaryImageId": "inntwqdeujmu8w4mcgrw",
                "locality": "Nampally",
                "areaName": "Masab Tank",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Hyderabadi",
                    "Mughlai",
                    "Biryani",
                    "Indian",
                    "Chinese"
                ],
                "avgRating": 3.9,
                "parentId": "19805",
                "avgRatingString": "3.9",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-17 06:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textExtendedBadges": {},
                        "textBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.4",
                        "ratingCount": "20+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=74646&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "9275",
                "name": "Golden Palace Restaurant",
                "cloudinaryImageId": "nsdfuqgcplvgsctr4k9c",
                "locality": "Kishan Bhag Road",
                "areaName": "Ambience Fort",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "Chinese",
                    "Haleem"
                ],
                "avgRating": 4,
                "parentId": "19110",
                "avgRatingString": "4.0",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-17 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textExtendedBadges": {},
                        "textBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "subHeader": "UPTO ₹45"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=9275&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
},
{
    "card": {
        "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
                "id": "647286",
                "name": "Paradise Biryani",
                "cloudinaryImageId": "a6dd67e831e4819214055b0840f2c4fe",
                "locality": "Mehdipatnam Circle",
                "areaName": "GUDIMALKAPUR",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "North Indian",
                    "Hyderabadi"
                ],
                "avgRating": 3.8,
                "parentId": "700",
                "avgRatingString": "3.8",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-17 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=647286&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
    }
}]





const Body = () => {
    return (<div className="body">
        <div className="search">
            search
        </div>
        <div className="res-container">
            {
                resListFromBackend.map((restaurant,index) => (<RestaurantCard key={restaurant.card.card.info.id} resProp = {restaurant} />))
            }
        </div>
    </div>)
}

const AppLayoutComponent = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);