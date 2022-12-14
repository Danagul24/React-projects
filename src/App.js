import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Orders from "./pages/Orders";
import Favourites from "./pages/Favourites";
import axios from "axios";
import AppContext from "./context";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favourites, setFavourites] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://638d9a18aefc455fb2a66030.mockapi.io/Cart"
      );
      const categoriesResponse = await axios.get(
        "https://638d9a18aefc455fb2a66030.mockapi.io/categories1"
      );
      const booksResponse = await axios.get(
        "https://638d9a18aefc455fb2a66030.mockapi.io/books"
      );

      setCartItems(cartResponse.data);
      setCategories(categoriesResponse.data);
      setBooks(booksResponse.data);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    axios
      .get("https://6399b1d129930e2bb3dbe751.mockapi.io/favourites")
      .then((res) => {
        setFavourites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post(`https://638d9a18aefc455fb2a66030.mockapi.io/Cart`, obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://638d9a18aefc455fb2a66030.mockapi.io/Cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Error when deleteting from cart");
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://6399b1d129930e2bb3dbe751.mockapi.io/favourites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://6399b1d129930e2bb3dbe751.mockapi.io/favourites",
          obj
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Adding to favourites failed");
    }
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        isItemAdded,
        onAddToCart,
        setCartOpened,
        setCartItems,
        searchValue,
        setSearchValue,
        onAddToFavourite,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Cart
            items={cartItems}
            onRemove={onRemoveItem}
            onClose={() => setCartOpened(false)}
          />
        )}

        <Router>
          <Header onClickCart={() => setCartOpened(true)} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  categories={categories}
                  books={books}
                  searchValue={searchValue}
                />
              }
            />
            <Route
              exact
              path="/:bookNameDetails"
              element={<Details books={books} />}
            />
            <Route exact path="/orders" element={<Orders />} />
            <Route
              exact
              path="/favourites"
              element={
                <Favourites
                  items={favourites}
                  onAddToFavourite={onAddToFavourite}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
