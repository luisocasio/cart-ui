import { AiOutlineFileSearch } from "react-icons/ai";
import "./SearchList.css";

const SearchList = ({ searchList, setSearchList }) => {
  const clearList = () => {
    setSearchList([]);
  };

  return (
    <div className="search-list">
      <div className="search-list-header">
        <AiOutlineFileSearch />
      </div>
      {searchList.map((item) => {
        return (
          <ul key={item.id} className="search-item">
            <h3>{item.name.toUpperCase()}</h3>
            <li className="search-item-description">{item.description}</li>
            <li className="search-item-price">
              <span>${item.price}</span>
            </li>
          </ul>
        );
      })}
      {searchList.length > 0 ? (
        <button onClick={clearList}>Clear List</button>
      ) : null}
    </div>
  );
};

export default SearchList;
