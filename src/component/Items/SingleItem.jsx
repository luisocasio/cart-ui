import { BsCartPlus } from "react-icons/bs";
import "./SingleItem.css";

const SingleItem = ({
  id,
  name,
  description,
  price,
  setQty,
  setCartItems,
  setCost,
  cartItems,
}) => {
  const handleClick = () => {
    const itemInCart = cartItems.find((item) => item.name === name);
    if (itemInCart) {
      return;
    }
    setCartItems((prevState) => [
      ...prevState,
      { id, name, description, price },
    ]);
    setCost((cost) => Math.round(cost + price));
    setQty((qty) => qty + 1);
  };

  return (
    <div className="item">
      <h3 className="item-name">{name.toUpperCase()}</h3>
      <img src="https://via.placeholder.com/150" alt="cart-item" />
      <p className="item-description">{description}</p>
      <button className="add-to-cart-button" onClick={handleClick}>
        <BsCartPlus />
      </button>
    </div>
  );
};

export default SingleItem;
