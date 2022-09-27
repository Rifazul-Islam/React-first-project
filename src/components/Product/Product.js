import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {

    const { addCart, meal } = props
    // console.log(props)
    const { strMealThumb, strMeal, idMeal } = meal
    return (

        <div className="cart">

            <img src={strMealThumb} alt="" />
            <div className='menu'>

                <h3>{strMeal} </h3>
                <p>Price :  {200} </p>
                <p> Id : {idMeal} </p>
            </div>
            <div className="btn-qual">
                <button onClick={() => addCart(meal)} className='btn-style'>
                    <p className='text'> AddCart</p>
                    <FontAwesomeIcon icon={faShoppingCart} > </FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;