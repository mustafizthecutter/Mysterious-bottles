import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`bottles.json`)
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    const handlePurchaseBtn = bottle => {
        setCart([...cart, bottle])
    }
    return (
        <div>
            <h3>Bottles List : {bottles.length}</h3>
            <h3>Cart: {cart.length}</h3>
            <div className="box-container">
                {
                    bottles.map(bottle => <Bottle handlePurchaseBtn={handlePurchaseBtn} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;