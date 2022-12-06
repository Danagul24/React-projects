import React from 'react';
import {useParams} from 'react-router-dom';

function Details() {
    let {bookNameDetails} = useParams();
    const [books, setBooks] = React.useState([]);

    React.useEffect(() => {
        fetch("https://638d9a18aefc455fb2a66030.mockapi.io/books")
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            console.log(json);
            setBooks(json);
          });
      }, []);


    return(
        <div className="d-flex justify-center">
           
            {books.map((obj)=>{
                if (obj.name==bookNameDetails)
                return(
                    <div>
                        <div className="mr-30">
                            <img height={400} src={obj.imgURL} alt="Book Image" />
                        </div>
                        <div className="mb-50">
                            <h1>{obj.name}</h1>
                            <p>{obj.author} </p>
                            <h1>{obj.price}</h1>
                            <button className="addToCart">Add to cart</button>
                            <h2>Description</h2>
                            <div className="description">
                                <p>{obj.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Details;