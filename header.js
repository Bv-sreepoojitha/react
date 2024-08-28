import {img} from "./content.js"
import Naveitems from "./Naveitems.js";

const Header=()=>{
    return(
    <div className="header-div">
        <div className="logo">
            <img className="logo-img" src={img}/>            
        </div>
        <Naveitems/>
    </div>
    ) 
}
export default Header;