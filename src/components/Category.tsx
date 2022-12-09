import React from "react";
import Item from "./Item";
import axios from 'axios';

interface IProps {
  id: BigInteger
  name: string
  books: {
    id: BigInteger
    name: string
    author: string
    price: number
    imgURL: string
    decriprion: string
    category_id: BigInteger
  }[]
}

const onAddToCart = (obj) => {
    // setCartItems(prev => [...prev, obj])
    axios.post('https://638d9a18aefc455fb2a66030.mockapi.io/Cart', obj);
}

function Category(props: IProps) {
  
  return (
    <div>
      <div className="d-flex flex-wrap">
        {props.books.map((obj) => {
          if (obj.category_id===props.id){
            return(
            <Item
              id = {obj.id}
              name={obj.name}
              author={obj.author}
              price={obj.price}
              imgURL={obj.imgURL}
              onPlus={(item) => onAddToCart(item)}
            />)
          }
            
      })}
      </div>
    </div>
  );
}

export default Category;
