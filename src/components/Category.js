import React from "react";
import Item from "./Item";
import AppContext from "../context";

function Category(props) {
  const { onAddToCart } = React.useContext(AppContext);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {props.books.map((obj) => {
          if (obj.category_id === props.id) {
            return (
              <Item
                key={obj.id}
                id={obj.id}
                name={obj.name}
                author={obj.author}
                price={obj.price}
                imgURL={obj.imgURL}
                onPlus={(item) => onAddToCart(item)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Category;
