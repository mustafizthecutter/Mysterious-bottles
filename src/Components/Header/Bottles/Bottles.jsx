import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../../Utilities/localstotrage";
import Cart from "../Cart/Cart";

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
    }, [bottles]);

    const handlePurchaseBtn = bottle => {
        setCart([...cart, bottle])
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h3>Bottles List : {bottles.length}</h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="box-container">
                {
                    bottles.map(bottle => <Bottle handlePurchaseBtn={handlePurchaseBtn} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;