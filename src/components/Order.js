import React from 'react';
import Item from './Item'
function Order(props) {
    return (
        <div className="container-order">
            <p>Nombre del cliente:</p>
            <p>Items:</p>
            {props.order.items.map(item =><Item item={item}/>)}
        </div>
    );
}

export default Order;