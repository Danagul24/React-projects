import React from 'react';
import {useParams} from 'react-router-dom';
import Category from '../components/Category.js';
import AppContext from '../context.js';

function ViewAll(){
  let {currentCategoryName} = useParams();

  const { categories } = React.useContext(AppContext);
  const { books } = React.useContext(AppContext);

    return (
        <div className="content p-40">
             <div className="category">
                {categories.map((category) => {
                  books.map((obj)=>{
                    if (obj.category == currentCategoryName){
                      return (
                      <div>
                        <div className="d-flex justify-between">
                          <h1>{obj.category}</h1>
                        </div>
                        <Category key = {category.id}
                          id={category.id}
                          books={books}
                          />
                      </div>
                      )
                    }
                  })
                })}           
            </div>
      </div>
        
    );
}

export default ViewAll;