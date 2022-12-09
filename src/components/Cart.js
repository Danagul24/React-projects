import React from "react";

function Cart({onClose, onRemove, items = []}){

    return(
        <div  className="overlay">
          <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
              Cart <img onClick={onClose} className="removeBtn" width={25} height={25} src="/img/close.png" alt="Close"/></h2>
            <div className="items">
               {
                items.map((obj) =>
                  <div className="cartItem d-flex align-center justify-between">
                  <img className="mr-25" width = {70} height={100} src={obj.imgURL} alt="Books" />
                  <div className="mr-20">
                      <div>
                      <p>{obj.name}</p>
                      <span>{obj.author}</span>
                      </div>
                      <b>{obj.price}</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="removeBtn" width={30} height={30} src="/img/cross.png" alt="Cross"/>
                  </div>
                )
               }
            </div>
            <div className="cartTotalBlock">
            <ul>
              <li>
                <spna>Overall: </spna>
                <div></div>
                <b>15.00$</b>
              </li>
            </ul>
            <button> CHECK OUT</button>
            </div>
          </div>
      </div>
    );
}

export default Cart;