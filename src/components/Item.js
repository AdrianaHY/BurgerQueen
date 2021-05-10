import React from 'react';

function Item(props) {

    return (
        <div className="item">
            <div>{props.item.name}</div>
            <div>${props.item.cost}</div>
        </div>
    );
}

export default Item;