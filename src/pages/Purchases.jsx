import {Link} from 'react-router-dom';
import Item from '../components/Item';
const purchases = [
    {name: 'Fahrenheit 451', autor: 'Ray Bradbury', price: '15.00$', imgURL: '/img/books/4.jpg'},
    {name: 'Brave New', autor: 'Aldous Huxley', price: '15.00$', imgURL: '/img/books/5.png'},
  ]

function ViewAll(){
    return (
        <div className="content p-40">
           <h1>My Purchases</h1>
          <div className="d-flex">
            {purchases.map((obj) => (
              <Link to={"/details"}>
                <Item name={obj.name} author={obj.autor} price={obj.price} imgURL={obj.imgURL} />
              </Link>
            ))}
          </div>
        </div>
        
    );
}

export default ViewAll;