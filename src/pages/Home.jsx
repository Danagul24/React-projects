
import React from 'react';
import Category from '../components/Category.js';

function Home(props){

    return (
        <div className="content p-40">
          <h1>{props.searchValue ? `Results of search: "${props.searchValue}"` : ''}</h1>
            <div className="category">
                {props.categories.map((category) => (
                  <div>
                    <div className="d-flex justify-between">
                      <h1>{category.name}</h1>
                      
                    </div>
                      <Category key = {category.id}
                          id={category.id}
                          books={props.books.filter((item) => item.name.toLowerCase().includes(props.searchValue.toLowerCase()))}
                      />
                  </div>
                ))}           
            </div>
         </div>
      
    );
}

export default Home;