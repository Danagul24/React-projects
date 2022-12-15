import React from "react";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";
import AppContext from "../../context";

function Item({
  id,
  name,
  imgURL,
  author,
  price,
  onPlus,
  onFavourite,
  favourited = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ id, name, imgURL, price, author });
  };

  const onClickFavourite = () => {
    onFavourite({ id, name, imgURL, price, author });
    setIsFavourite(!isFavourite);
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
          <b style={{ fontSize: "14px" }}>{price}$</b>
        </div>
        {onFavourite && (
          <img
            onClick={onClickFavourite}
            width={30}
            height={30}
            src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
            alt="Like"
          />
        )}
        {onPlus && (
          <img
            onClick={onClickPlus}
            width={30}
            height={30}
            src={isItemAdded(id) ? "/img/tick.svg" : "/img/plus.svg"}
            alt="Plus"
          />
        )}
      </div>
    </div>
  );
}

export default Item;
