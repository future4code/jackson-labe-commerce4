import React from 'react'

import {CartSpan, ItemsList} from './styleShoppingCart'

function CartItem(props) {
    return <p>{props.qnt} {props.name} <b>X</b></p>
}


function ShoppingCart(props) {
    return (
        <CartSpan>
            <h3>Carrinho:</h3>
            <ItemsList>
                {props.putInCart.map((item) => {
                   return <CartItem qnt={item.qnt} name={item.name}/>
                })}
            </ItemsList>
            <hr />
            <h3>VALOR TOTAL</h3>
            <p>{props.sendSubtotal}</p>
        </CartSpan>
    )
}
export default ShoppingCart;