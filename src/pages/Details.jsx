import React from 'react';
import {useParams} from 'react-router-dom';

function Details(props) {
    let {bookNameDetails} = useParams();

    return(
        <div className="d-flex justify-center">
           
            {/* eslint-disable-next-line array-callback-return */}
            {props.books.map((obj)=>{
                if (obj.name===bookNameDetails)
                return(
                    <div>
                        <div className="mr-30">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
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