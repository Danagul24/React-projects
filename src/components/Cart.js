function Cart(props){
    return(
        <div  className="overlay">
          <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
              Cart <img onClick={props.onClose} className="removeBtn" width={25} height={25} src="/img/close.png" alt="Close"/></h2>
            <div className="items">
              <div className="cartItem d-flex align-center justify-between">
                <img className="mr-25" width = {70} height={100} src="/img/books/1.jpg" alt="Books" />
                <div className="mr-20">
                  <div>
                    <p>Dune</p>
                    <span>Frank Herbert</span>
                  </div>
                  <b>15.00$</b>
                </div>
                <img className="removeBtn" width={30} height={30} src="/img/cross.png" alt="Cross"/>
              </div>
              <div className="cartItem d-flex align-center justify-between">
                <img className="mr-25" width = {70} height={100} src="/img/books/1.jpg" alt="Books" />
                <div className="mr-20">
                  <div>
                    <p>Dune</p>
                    <span>Frank Herbert</span>
                  </div>
                  <b>15.00$</b>
                </div>
                <img className="removeBtn" width={30} height={30} src="/img/cross.png" alt="Cross"/>
              </div>
            </div>
            <div className="cartTotalBlock">
            <ul>
              <li>
                <spna>Overall: </spna>
                <div></div>
                <b>15.00$</b>
              </li>
            </ul>
            <button> CHECK OUT</button>
            </div>
          </div>
      </div>
    );
}

export default Cart;