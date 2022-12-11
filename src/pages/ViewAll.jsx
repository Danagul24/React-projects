import React from 'react';
import {useParams} from 'react-router-dom';
import Category from '../components/Category.js';

function ViewAll(props){
  let {currentCategory} = useParams();
    return (
        <div className="content p-40">
             <div className="category">
                  {props.books.map((obj, index)=>{
                    if (obj.category == currentCategory){
                      return (
                      <div>
                        <div className="d-flex justify-between">
                          <h1>{obj.category}</h1>
                        </div>
                        <Category key = {index}
                          id={obj.Category}
                          books={props.books}
                          />
                      </div>
                      )
                    }
                  })
                }      
            </div>
      </div>
        
    );
}

export default ViewAll;