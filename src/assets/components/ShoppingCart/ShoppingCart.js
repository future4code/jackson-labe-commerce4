import React from 'react'
import styled from 'styled-components'

const CartSpan = styled.span`
    width: 100%;
    height: 20em;
    display: flex;
    margin: 20px;
    flex-direction: column;
    border: solid 1px black;
    padding: 10px;
`
const ItemsList = styled.ul`
    width: 100%100%;
`

class ShoppingCart extends React.Component {
    render (){
        return (
            <CartSpan>
                <h3>Carrinho:</h3>
                <ItemsList>
                    
                </ItemsList>
            </CartSpan>
        )
    }
}

export default ShoppingCart;