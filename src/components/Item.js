import React from "react";

function Item(props){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus= () => {
        setIsAdded (!isAdded);
    };
    return(
        <div className="card" >
            <img width = {117} height={190} src={props.imgURL} alt="Books" />
            <div>
                <p>{props.name}</p>
                <span>{props.author}</span>
            </div>
            <div className="d-flex justify-between" style={{marginTop: '20px'}}>
                <div className="d-flex flex-column">
                    <span style={{fontSize: '14px'}}>Цена: </span>
                    <b style={{fontSize: '14px'}}>15.00$</b>
                </div>
                <button onClick={onClickPlus} >
                    <img width={11} height={11} src={isAdded ? '/img/check.png' : '/img/plus.png'} alt=""/>
                </button>
            </div>
        </div>
    );
}


export default Item; 