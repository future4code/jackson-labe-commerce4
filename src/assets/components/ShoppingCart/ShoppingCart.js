import React from 'react'
import styled from 'styled-components'

const CartSpan = styled.span`
    width: 20%;
    display: flex;
    margin: 20px;
    flex-direction: column;
    border: solid 1px black;
    padding: 10px;
`

class ShoppingCart extends React.Component {
    render (){
        return (
            <CartSpan>
                <h3>Carrinho:</h3>
            </CartSpan>
        )
    }
}

export default ShoppingCart;