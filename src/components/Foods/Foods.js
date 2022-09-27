import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';

import './Foods.css'

const Foods = () => {

    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')

            .then(res => res.json())
            .then(data => setMeals(data?.meals))
    }, [])

    // console.log(meals)



    const addCart = (meals) => {

        let newCart = [...cart, meals];

        setCart(newCart)
    }



    return (
        <div className="foods">

            <div className="food-container">


                {
                    meals.map(meal => <Product key={meal.idMeal}

                        meal={meal}


                        addCart={addCart}
                    > </Product>)
                }

            </div>
            <div className="food-cart">


                <Cart cart={cart}> </Cart>

            </div>
        </div>
    );
};

export default Foods;