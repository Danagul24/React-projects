import React from "react";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

function Item({id, name, imgURL, author, price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({id, name, imgURL, price, author})
    setIsAdded(!isAdded);
  };
  
  return (
    <div className={styles.card}>
      <Link to={name}>
        <img width={117} height={190} src={imgURL} alt="Books" />
      </Link>

      <div>
        <p>{name}</p>
        <span>{author}</span>
      </div>
      <div className="d-flex justify-between" style={{ marginTop: "20px" }}>
        <div className="d-flex flex-column">
          <span style={{ fontSize: "14px" }}>Цена: </span>
          <b style={{ fontSize: "14px" }}>{price}</b>
        </div>
        <button onClick={onClickPlus}>
          <img
            width={30}
            height={30}
            src={isAdded ? "/img/tick.svg" : "/img/plus.svg"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Item;