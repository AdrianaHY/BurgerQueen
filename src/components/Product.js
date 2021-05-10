import React from 'react';

function Product(props) {
    const {name, cost} = props.item;
    return (
        <div className="product" onClick={()=>{(props.handleAddItem(props.item))}}>
            <div>{name} </div>
            <strong>${cost} </strong>
        </div>
    );
}

export default Product;