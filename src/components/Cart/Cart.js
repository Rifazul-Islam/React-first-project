
import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {

    console.log(cart)

    let name;
    let id;
    for (const meal of cart) {

        name = meal.strMeal
        id = meal.idMeal;
    }

    return (
        <div className='outSite'>
            <h2>Order Summay</h2>
            <h3> Select items :{cart.length} </h3>
            <h2> Name : {name} </h2>
            <p>id : {id} </p>
        </div>
    );
};

export default Cart;