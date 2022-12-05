
import React from 'react';
import Category from '../components/Category.tsx';

function Home(){
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
      fetch("https://638d9a18aefc455fb2a66030.mockapi.io/categories")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json)
          setCategories(json);
        });
    }, []);
  

    return (
        <div className="content p-40">
            <div className="category">
                {categories.map((category) => (
                    <Category 
                        category_name={category.category_name}
                        books={category.books}
                    />
                ))}           
            </div>
         </div>
     /* <div className="category">
        <div className="d-flex justify-between">
          <h1>Comedy</h1>
          <p>View all</p>
        </div>
        <di className="d-flex justify-center">
          {comedy.map((obj) => (
            <Item
              name={obj.name}
              author={obj.autor}
              price={obj.price}
              imgURL={obj.imgURL}
            />
          ))}
        </di
          </div> */ 
      
    );
}

export default Home;