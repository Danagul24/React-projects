import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";
import Purchases from "./pages/Purchases";
import Details from "./pages/Details";
import axios from "axios";
import AppContext from "./context";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://638d9a18aefc455fb2a66030.mockapi.io/Cart`)
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("https://638d9a18aefc455fb2a66030.mockapi.io/categories1")
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("https://638d9a18aefc455fb2a66030.mockapi.io/books")
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post(`https://638d9a18aefc455fb2a66030.mockapi.io/Cart/`, obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://638d9a18aefc455fb2a66030.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        isItemAdded,
        onAddToCart,
        categories,
        books,
        setCartOpened,
        setCartItems,
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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:bookNameDetails" element={<Details />} />
            <Route exact path="/:currentCategoryName" element={<ViewAll />} />
            <Route exact path="/purchases" element={<Purchases />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
