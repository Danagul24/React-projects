import {Link} from 'react-router-dom';
import Item from '../components/Item';
import axios from 'axios';
import React from 'react';

function Orders(){
  const [ orders, setOrders ] = React.useState([]);

  React.useEffect(() => {
    (async ()=> {
      try {
        const { data } = await axios.get(`https://638d9a18aefc455fb2a66030.mockapi.io/orders`);
        setOrders(data.reduce((prev,obj) => [...prev, ...obj.items], []));
      } catch (error) {
        alert("Error in proceesing orders")
      }
    })();
  }, []);

    return (
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>My Orders</h1>
          </div>
          <div className="d-flex flex-wrap">
            {orders.map((obj) => (
              <Link to={"/details"}>
                <Item 
               key={obj.id}
               {...obj}
               />
              </Link>
            ))}
          </div>
        </div>
        
    );
}

export default Orders; 