import React  from 'react'
import { useSelector } from 'react-redux'

export default function Header (){
    
    const pizza = useSelector(state => state.pizza)

    return(
        <div>
            Total of ingredients you have choosen: {pizza.toppings.length}
        </div>
    )
}