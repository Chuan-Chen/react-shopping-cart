import "./Headers.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default function Header(props){


    return (
        <div className = "header">
            <div className = "banner">
                <Router>
                    <Link to = "home"><div className = "btn">Home</div></Link>
                    <Link to = "shop"><div className = "btn">Shop</div></Link>
                    <Link to = "about"><div className = "btn">About</div></Link>
                </Router>
            </div>
        </div>
    )
}