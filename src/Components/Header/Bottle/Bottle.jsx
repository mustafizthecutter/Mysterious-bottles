import './Bottle.css'
import PropTypes from 'prop-types'
const Bottle = ({ bottle, handlePurchaseBtn }) => {
    const { name, price, img } = bottle

    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Bottle Name: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handlePurchaseBtn(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlePurchaseBtn: PropTypes.func.isRequired
}

export default Bottle;