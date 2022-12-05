import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

interface IProps {
  category_name: string
  books: {
    name: string
    author: string
    price: number
    imgURL: string
  }[]
}

function Category(props: IProps) {
  return (
    <div>
      <div className="d-flex justify-between">
        <h1>{props.category_name}</h1>
        <Link to="all">View all</Link>
      </div>
      <div className="d-flex flex-wrap">
        {props.books.slice(0, 5).map((obj) => (
            <Item
              name={obj.name}
              author={obj.author}
              price={obj.price}
              imgURL={obj.imgURL}
            />
        ))}
      </div>
    </div>
  );
}

export default Category;
