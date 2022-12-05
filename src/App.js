import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";
import Purchases from "./pages/Purchases";
import Details from "./pages/Details";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}

      <Router>
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/all" element={<ViewAll />} />
          <Route exact path="/purchases" element={<Purchases />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
