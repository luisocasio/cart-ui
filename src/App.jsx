import { useState, useEffect, useRef } from "react";

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
    name: "kiwi",
    description: "This is a kinda kiwi",
    price: 4.99,
  },
];

function sortByCost(items) {
  return items.sort((a, b) => a.price - b.price);
}

function DisplayItems() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const ref = useRef("");

  function handleSearch(e) {
    e.preventDefault();
    setSearch(ref.current.value);
    setInput("");
  }

  function handleSortByCost() {
    const sortedItems = sortByCost(itemsArr);
    setItems(() => [...sortedItems]);
  }

  function handleSortByName() {
    const sortedItems = itemsArr.sort((a, b) => a.name.localeCompare(b.name));
    setItems(() => [...sortedItems]);
  }

  useEffect(() => {
    setItems(itemsArr);
  }, [items]);

  return (
    <div>
      <h1>Search a Fruit</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={ref}
        />
        <button onClick={handleSearch} type="submit">
          Search
        </button>
      </form>

      <div>
        {search === ""
          ? null
          : items
              .filter((item) => item.name.includes(search))
              .map((item) => (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              ))}
      </div>

      <button onClick={handleSortByCost}>Filter by cost</button>
      <button onClick={handleSortByName}>Sort by name</button>
    </div>
  );
}

function App() {
  return (
    <>
      <DisplayItems />
    </>
  );
}

export default App;
