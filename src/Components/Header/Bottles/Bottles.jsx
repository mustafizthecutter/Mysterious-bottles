import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../../Utilities/localstotrage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`bottles.json`)
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);
    useEffect(() => {
        if (bottles.length) {
            const getCart = getStoredCart();
            const savedCart = [];
            for (const id of getCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                savedCart.push(bottle);
                setCart(savedCart)
            }
        }
    }, [bottles])
    const handlePurchaseBtn = bottle => {
        setCart([...cart, bottle])
        addToLS(bottle.id)
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