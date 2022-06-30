import { BsCartX } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import "./Cart.css";

const Cart = ({ qty, cost, cartItems, setQty, setCost, setCartItems }) => {
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setQty(qty - 1);
    setCost(cost - Math.round(cartItems.find((item) => item.id === id).price));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-header">
        <h3 className="cart-header-name">
          <GiShoppingCart />
        </h3>
      </div>
      <div className="cart-body">
        {cartItems.length >= 1 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-header">
                <h3>{item.name}</h3>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="item-delete-button"
                >
                  <BsCartX />
                </button>
              </div>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>No items in cart</p>
        )}
      </div>
      <div className="cart-expenses">
        <p>Total of items: {`${qty}`}</p>
        <p>Total: ${`${cost}`}</p>
      </div>
    </div>
  );
};

export default Cart;
