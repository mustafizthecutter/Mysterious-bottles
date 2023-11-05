const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return []
}
const saveToLS = cart => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToLS = id => {
    const cart = getStoredCart()
    cart.push(id)
    saveToLS(cart);
}
export { addToLS, getStoredCart }