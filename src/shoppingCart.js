import { useState } from 'react';

export default function ShoppingCart(props){
    const [count, setCount] = useState(0);
    const [showCart, setShowCart] = useState(false);


    function togggleCart(){
        setShowCart(!showCart);
    }

    function addFromCart(){
        setCount(count++);
    }
    function removeFromCart(){
        setCount(count--);
    }



    return (
        <>
            <div><img src = ""></img></div>
            <div>{count}</div>
        </>
    )
}