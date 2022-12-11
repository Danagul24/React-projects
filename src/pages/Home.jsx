
import React from 'react';
import Category from '../components/Category.js';
import { Link } from "react-router-dom";

function Home(props){

    return (
        <div className="content p-40">
            <div className="category">
                {props.categories.map((category) => (
                  <div>
                    <div className="d-flex justify-between">
                      <h1>{category.name}</h1>
                      <Link to = {category.name} >View all</Link>
                    </div>
                      <Category key = {category.id}
                          id={category.id}
                          books={props.books}
                      />
                  </div>
                ))}           
            </div>
         </div>
      
    );
}

export default Home;