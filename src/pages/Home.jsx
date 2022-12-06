
import React from 'react';
import Category from '../components/Category.tsx';
import { Link } from "react-router-dom";

function Home(){
    const [categories, setCategories] = React.useState([]);
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
      fetch("https://638d9a18aefc455fb2a66030.mockapi.io/categories1")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json)
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
                {categories.map((category) => (
                  <div>
                    <div className="d-flex justify-between">
                      <h1>{category.name}</h1>
                      <Link to={category.name}>View all</Link>
                    </div>
                      <Category 
                          id={category.id}
                          books={books}
                      />
                  </div>
                ))}           
            </div>
         </div>
      
    );
}

export default Home;