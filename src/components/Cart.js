import React from "react";
import Info from "./Info";
import AppContext from "../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        "https://638d9a18aefc455fb2a66030.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://638d9a18aefc455fb2a66030.mockapi.io/Cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            width={25}
            height={25}
            src="/img/close.png"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center justify-between"
                >
                  <img
                    className="mr-25"
                    width={70}
                    height={100}
                    src={obj.imgURL}
                    alt="Books"
                  />
                  <div className="mr-20">
                    <div>
                      <p>{obj.name}</p>
                      <span>{obj.author}</span>
                    </div>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    width={30}
                    height={30}
                    src="/img/cross.png"
                    alt="Cross"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <spna>Overall: </spna>
                  <div></div>
                  <b>15.00$</b>
                </li>
              </ul>
              <button onClick={onClickOrder}> CHECK OUT</button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "You made an order!" : "Cart is empty"}
            description={
              isOrderCompleted
                ? `Your order #${orderId} will be transferred to the delivery service`
                : "Add at least one book to make an order"
            }
            image={
              isOrderCompleted
                ? "/img/complete-order.png"
                : "/img/empty-cart.png"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
