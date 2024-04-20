
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/Url";
import { useSelector } from "react-redux";
function Nav(){

    const cartItems = useSelector((store)=>store.cart.items);

    return(
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={LOGO_URL} alt="food"></img></Link>
            </div>
            <div className="nav-link"> 
                <Link to="/about" className="link-style"><i class="ri-discount-percent-line"> Offers</i></Link>
                <Link to="/help" className="link-style"><i class="ri-question-line"> Help</i></Link>
                <Link className="link-style"><i class="ri-account-pin-circle-line"> Sign In</i></Link>
                <Link to="/cart" className="link-style"><i class="ri-shopping-bag-3-line"> Cart ({cartItems.length})</i></Link>
            </div>
        </div>
    );
}

export default Nav;

