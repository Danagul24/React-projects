import {Link} from 'react-router-dom';
import Item from "./Item";

const science = [
    
    {name: 'Dune', autor: 'Frank Herbert', price: '15.00$', imgURL: '/img/books/1.jpg'},
    {name: 'Solaris', autor: 'Stanisław Lem', price: '15.00$', imgURL: '/img/books/2.jpg'},
    {name: 'The End', autor: 'Isaac Asimov', price: '15.00$', imgURL: '/img/books/3.jpg'},
    {name: 'Fahrenheit 451', autor: 'Ray Bradbury', price: '15.00$', imgURL: '/img/books/4.jpg'},
    {name: 'Brave New', autor: 'Aldous Huxley', price: '15.00$', imgURL: '/img/books/5.png'},
  ]
  
  const comedy = [
    {name: 'Born a Crime', autor: 'Trevor Noah', price: '15.00$', imgURL: '/img/books/6.jpg'},
    {name: 'Bossypants', autor: 'Tina Fey', price: '15.00$', imgURL: '/img/books/7.jpg'},
    {name: 'Catch-22', autor: 'Joseph Heller', price: '15.00$', imgURL: '/img/books/8.jpg'},
    {name: 'Good Omens', autor: 'Neil Gaiman', price: '15.00$', imgURL: '/img/books/9.jpg'},
    {name: 'Robin', autor: 'David Itzkoff', price: '15.00$', imgURL: '/img/books/10.jpg'},
  ]

function Category() {
    return(
          <div>
            <div className="category">
            <div className="d-flex justify-between">
              <h1>Science fiction</h1>
                <p>View all</p>
            </div>
          <div className="d-flex">
            {science.map((obj) => (
              <Link to={"/details"}>
                <Item name={obj.name} author={obj.autor} price={obj.price} imgURL={obj.imgURL} />
              </Link>
            ))}
          </div>
        </div>
        <div className="category">
        <div className="d-flex justify-between">
            <h1>Comedy</h1>
            <p >View all</p>
        </div>
        <div className="d-flex justify-center">
        {comedy.map((obj) => (
            <Item name={obj.name} author={obj.autor} price={obj.price} imgURL={obj.imgURL} />
            ))}
        </div>
        </div>
        
          </div>
    );
}

export default Category;

{/*    */}