import "./Headers.css";
import { Link } from 'react-router-dom';
export default function Header(props){


    return (
        <div className = "header">
            <div className = "banner">
            
                    <Link to = "/home"><div className = "btn">Home</div></Link>
                    
                    <Link to = "/shop"><div className = "btn">Shop</div></Link>
                    
                    <Link to = "/about"><div className = "btn">About</div></Link>

            </div>
        </div>
    )
}