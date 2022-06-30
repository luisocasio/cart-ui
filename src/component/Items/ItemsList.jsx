import React, { useState } from "react";
import "./ItemsList.css";
import { CgScrollV, CgPlayListRemove, CgPlayListCheck } from "react-icons/cg";
import SingleItem from "./SingleItem";

const ItemsList = ({ items, setQty, setCartItems, setCost, cartItems }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="parent">
      {!show ? (
        <button className="item-list-button" onClick={handleClick}>
          <CgPlayListCheck />
        </button>
      ) : (
        <button className="item-list-button" onClick={handleClick}>
          <CgPlayListRemove />
        </button>
      )}

      <hr />
      <div className="item-list-wrapper">
        {!show
          ? null
          : items.map((item) => (
              <SingleItem
                key={item.id}
                id={item.id}
                items={items}
                name={item.name}
                description={item.description}
                price={item.price}
                setQty={setQty}
                setCost={setCost}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            ))}
      </div>
      {!show ? null : <CgScrollV />}
    </div>
  );
};

export default ItemsList;
