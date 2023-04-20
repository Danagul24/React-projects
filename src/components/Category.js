import React from "react";
import Item from "./Item";
import AppContext from "../context";

function Category(props) {
  const { onAddToCart, onAddToFavourite } = React.useContext(AppContext);

  return (
    <div>
      <div className="d-flex flex-wrap">
          {/* eslint-disable-next-line array-callback-return */}
        {props.books.map((obj) => {
          if (obj.category_id === props.id) {
            return (
              <Item
                key={obj.id}
                onPlus={(obj) => onAddToCart(obj)}
                onFavourite={(obj) => onAddToFavourite(obj)}
                {...obj}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Category;
