import Header from "./Header/Header";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";


export default function App(){

    return (
    <>
        <div>
            <Header></Header>
            <div>
                
                           
                    <Routes>
                        <Route index element = {<Home/>}></Route>
                        <Route path = "home" element = {<Home/>}></Route>
                        <Route path = "shop" element = {<Shop/>}></Route>
                        <Route path = "about" element = {<About/>}></Route>
                    </Routes>
                
            </div>
            <Footer></Footer>
        </div>
    </>
    )
}