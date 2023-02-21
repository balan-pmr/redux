import React, { useReducer, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {  addTopping, toggleGluten } from './pizzaSlice'



function App() {

  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch()

  function addToppings(topping){
    let isToppingAdded = pizza.toppings.some( t => t===topping )    
    if(isToppingAdded) {
        console.log(topping + ' already added.')
    }else{
        console.log('adding topping to pizza ->',topping )
        dispatch(addTopping(topping)) 
    }
  }

  function removeTopping(topping){
    let todoToppings = {...pizza.toppings}
    // todoToppings is an object like {0: 'Tomato', 1: 'Peperoni'}
    console.log(todoToppings)
  }  

  return (
    <div className="App">

      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>

      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>

      <section>
        <p>Pizza made with {pizza.gluten?'gluten.':' gluten free!'} </p>
        {
          pizza.toppings.map(
            topping => (
              <div key={topping} >
                {topping} <button onClick={ ()=> removeTopping(topping) } >Remove</button>
              </div>  
            )
          )
        }
        <button onClick={ ()=> addToppings('Peperoni') } >Add Peperoni</button>
        <button onClick={ ()=> addToppings('Olives') }  >Add Olives</button>
        <button onClick={ ()=> addToppings('Mushrooms') }  >Add Mushrooms</button>
        <button onClick={ ()=> addToppings('Onion') }  >Add Onion</button>        
        <button onClick={ ()=>dispatch( toggleGluten() )  }  >Toggle Gluten</button>
        
      </section>

    </div>
  )
}

export default App