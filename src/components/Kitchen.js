import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebase'
import Order from './Order'
import Product from './Product'

export default function Kitchen(props) {

    const handleAddItem=(item)=>{
        props.setOrder({...props.order, items:[...props.order.items,item]})
    }

    const products=[
        {id:1, name: 'Hamburguesa', cost:50},
        {id:2, name: 'Agua', cost:10},
        {id:3, name: 'Manzana', cost:20},
    ]

    if (!props.user) {
        console.log('here', props.user)
        return <Redirect to="/" />
    }

    return (
        <>
            <h1>User {props.user.email} is in kitchen</h1>
            <div className="container">
                <div className="container-products">
                    {products.map(item=><Product item={item} key={item.id} handleAddItem={handleAddItem}/>)}
                </div>
                <Order order={props.order}/>
            </div>
           
        </>
    )
}