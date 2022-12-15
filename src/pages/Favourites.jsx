import Item from "../components/Item";
import AppContext from "../context";
import React from "react";

function Favourites (){
const { favourites, onAddToFavourite } = React.useContext(AppContext);

    return(
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>My Favourites</h1>
          </div>
          <div className="d-flex flex-wrap">
            {favourites.map((obj) => (
                <Item 
               key={obj.id}
               favourited={true}
               onFavourite = {onAddToFavourite}
               {...obj}
               />
            ))}
          </div>
        </div>
        
    );
}

export default Favourites;