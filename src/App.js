import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";
import Purchases from "./pages/Purchases";
import Details from "./pages/Details";
import axios from 'axios';
// import { createGlobalState } from "react-hooks-global-state";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    axios.get('https://638d9a18aefc455fb2a66030.mockapi.io/Cart').then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onRemoveItem = (id) => {
    axios.delete(`https://638d9a18aefc455fb2a66030.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
 
  return (
    
    <div className="wrapper clear">
      {cartOpened && <Cart items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} />}

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
  );
}

export default App;