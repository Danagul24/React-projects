import Item from "../components/Item";

function Favourites ({items, onAddToFavourite}){
    return(
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>My Favourites</h1>
          </div>
          <div className="d-flex flex-wrap">
            {items.map((obj) => (
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