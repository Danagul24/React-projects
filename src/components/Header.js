import { Link } from "react-router-dom";
import React from "react";
import AppContext from "../context";
function Header(props) {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={"/"}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>BOOK STORE</h3>
            <p>Online book selling platfrom</p>
          </div>
        </div>
      </Link>
      <div className="search-block d-flex">
        <img width={18} height={18} src="/img/search.png" alt="Search" />
        {searchValue && (
          <img
            onClick={() => setSearchValue("")}
            className="clear"
            src="/img/close.png"
            alt="Clear"
          />
        )}
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          placeholder="Search..."
        ></input>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="cart mr-30">
          <img width={24} height={18} src="/img/cart.svg" />
          <span>{totalPrice}$</span>
        </li>
        <li>
          <Link to="/favourites">
            <img
              width={18}
              height={22}
              className="mr-20"
              src="/img/favourites.svg"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
