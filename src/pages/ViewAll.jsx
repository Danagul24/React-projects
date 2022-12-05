import {Link} from 'react-router-dom';
import Item from '../components/Item';
const science = [
    
    {name: 'Dune', autor: 'Frank Herbert', price: '15.00$', imgURL: '/img/books/1.jpg'},
    {name: 'Solaris', autor: 'Stanisław Lem', price: '15.00$', imgURL: '/img/books/2.jpg'},
    {name: 'The End', autor: 'Isaac Asimov', price: '15.00$', imgURL: '/img/books/3.jpg'},
    {name: 'Fahrenheit 451', autor: 'Ray Bradbury', price: '15.00$', imgURL: '/img/books/4.jpg'},
    {name: 'Brave New', autor: 'Aldous Huxley', price: '15.00$', imgURL: '/img/books/5.png'},
  ]

function ViewAll(){
    return (
        <div className="content p-40">
            <div className="category">
            <div className="d-flex justify-between">
              <h1>Science fiction</h1>
            </div>
          <div className="d-flex">
            {science.map((obj) => (
                <Item name={obj.name} author={obj.autor} price={obj.price} imgURL={obj.imgURL} />
            ))}
          </div>
        </div>
      </div>
        
    );
}

export default ViewAll;