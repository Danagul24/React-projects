import React from "react";
import Item from "./Item";

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

function Category(props: IProps) {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {props.books.map((obj) => {
          if (obj.category_id==props.id){
            return(
            <Item
              id={obj.id}
              name={obj.name}
              author={obj.author}
              price={obj.price}
              imgURL={obj.imgURL}
              decription={obj.decriprion}
            />)
          }
            
      })}
      </div>
    </div>
  );
}

export default Category;
