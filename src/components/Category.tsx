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
        <p>View all</p>
      </div>
      <div className="d-flex flex-wrap">
        {props.books.map((obj) => (
          <Link to={"/details"}>
            <Item
              name={obj.name}
              author={obj.author}
              price={obj.price}
              imgURL={obj.imgURL}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
