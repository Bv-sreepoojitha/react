import RestaurentCards from "./RestuarentCards";
import { Reslist } from "./Restuarent_data";
const Body = () =>{
    return(
        <div className="res-container">
            {Reslist.map((restaurant) =>(
                <RestaurentCards key={restaurant.info.id} resdata={restaurant} />
            ))}
        </div>
        
    );
};

export default Body;