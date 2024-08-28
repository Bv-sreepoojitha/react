import {Link} from "react-router-dom";
const Navitems= ()=>{
    return(
        <div className="Navitems">
            <ul>
                <li>
            <Link to="/home"> HOME </Link>
            </li>
                <li>
                <Link to="/about"> ABOUT</Link>
                </li>
                <li>
                <Link to="/Contact">CONTACT </Link>
                </li>
                <li>
                <Link to="/Cart">CART</Link>
                </li>
            </ul>
            </div>


    )
}
export default Navitems;