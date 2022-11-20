import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import ViewAll from './pages/ViewAll';
import Purchases from './pages/Purchases';
import Details from './pages/Details';


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Cart onClose={() => setCartOpened(false)} /> }
      <Header onClickCart={() => setCartOpened(true)} />
      
      {/* <Home /> */}
      {/* <ViewAll /> */}
      {/* <Purchases /> */}
      {/* <Details /> */}
    </div>
  );
}

export default App;
