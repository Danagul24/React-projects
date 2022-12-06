import React from 'react';
import {useParams} from 'react-router-dom';
import Category from '../components/Category.tsx';

function ViewAll(){
  let {currentCategoryName} = useParams();
  const [books, setBooks] = React.useState([]);
  
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("https://638d9a18aefc455fb2a66030.mockapi.io/categories1")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setCategories(json);
      });
  }, []);
    React.useEffect(() => {
      fetch("https://638d9a18aefc455fb2a66030.mockapi.io/books")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json)
          setBooks(json);
        });
    }, []);

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
                          <Category 
                              category_name={obj.category}
                              books={category.books}
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