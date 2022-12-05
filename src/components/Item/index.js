import React from "react";
import styles from "./Item.module.scss";

function Item(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <img width={117} height={190} src={props.imgURL} alt="Books" />
      <div>
        <p>{props.name}</p>
        <span>{props.author}</span>
      </div>
      <div className="d-flex justify-between" style={{ marginTop: "20px" }}>
        <div className="d-flex flex-column">
          <span style={{ fontSize: "14px" }}>Цена: </span>
          <b style={{ fontSize: "14px" }}>15.00$</b>
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
