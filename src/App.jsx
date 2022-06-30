import { useState } from "react";
import Cart from "./component/Cart/Cart";
import ItemsList from "./component/Items/ItemsList";
import Search from "./component/Search/Search";
import SearchList from "./component/Search/SearchList";

const itemsArr = [
  {
    id: 1,
    name: "apple",
    description: "This is a delicious apple",
    price: 2.99,
  },
  {
    id: 2,
    name: "orange",
    description: "This is a bright orange",
    price: 0.99,
  },
  {
    id: 3,
    name: "banana",
    description: "This is a yellow banana",
    price: 1.99,
  },
  {
    id: 4,
    name: "grape",
    description: "This is a tasty grape",
    price: 0.25,
  },
  {
    id: 5,
    name: "lemon",
    description: "This is a kinda sour lemon",
    price: 3.99,
  },
  {
    id: 6,
    name: "raspberry",
    description: "This is a kinda raspberry",
    price: 2.99,
  },
  {
    id: 7,
    name: "guava",
    description: "This is a kinda guava",
    price: 8.99,
  },
  {
    id: 8,
    name: "plum",
    description: "This is a kinda plum",
    price: 6.99,
  },
  {
    id: 9,
    name: "kiwi",
    description: "This is a kinda kiwi",
    price: 2.99,
  },
  {
    id: 10,
    name: "melon",
    description: "This is a kinda melon",
    price: 1.99,
  },
];

function App() {
  const [items] = useState(itemsArr);
  const [searchList, setSearchList] = useState([]);
  const [qty, setQty] = useState(0);
  const [cost, setCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <ItemsList
        items={items}
        setQty={setQty}
        setCost={setCost}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
      <SearchList searchList={searchList} setSearchList={setSearchList} />
      <div className="search-cart">
        <Search items={items} setSearchList={setSearchList} />
        <Cart
          qty={qty}
          cost={cost}
          cartItems={cartItems}
          setQty={setQty}
          setCost={setCost}
          setCartItems={setCartItems}
        />
      </div>
    </div>
  );
}

export default App;
