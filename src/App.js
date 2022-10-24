import Header from "./Header/Header";
import Footer from "./Footer.js";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css";

export default function App(){

    return (
    <>
        <div>
            <Header></Header>
            <div>
                <Router>
                    <Routes>

                    </Routes>
                </Router>
            </div>
            <Footer></Footer>
        </div>
    </>
    )
}