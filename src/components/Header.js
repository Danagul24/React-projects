import {Link} from 'react-router-dom';

function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">
        <Link to={"/"}>
        <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>BOOK STORE</h3>
            <p>Online book selling platfrom</p>
          </div>
        </div>
        </Link>
        <div className="search-block d-flex">
          <img  width={18} height={18} src='/img/search.png' alt='Search'/>
          <input placeholder="Search..."></input>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>$0</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
    );
}

export default Header;