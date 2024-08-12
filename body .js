import RestuarantCard from "./RestuarantCard";
const Body = () => {
    const [listOfRestaurants, setListOfRestraunts] = useState([]);
  
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
    const [searchText, setSearchText] = useState("");
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      const jsonObj = await data.json();
      //console.log(jsonObj);
  
      setListOfRestraunts(
        jsonObj?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle
          .restaurants
      );
      setFilteredRestaurant(
        jsonObj?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle
          .restaurants
        );
    }
    className="filter-btn"
    onClick={() {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4
      );
      setListOfRestraunt(filteredList);
    }
  
    Top Rated Restaurants
  </button>
</div>
<div className="res-container">
  {filteredRestaurant.map((restaurant) => (
    <RestuarantCard key={restaurant.info.id} resInfo={restaurant} />
  ))}
</div>
</div>

};

export default Body;
