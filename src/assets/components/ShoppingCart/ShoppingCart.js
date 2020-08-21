import React from 'react'
import styled from 'styled-components'

const CartSpan = styled.span`
    position:relative;
    top: 50px;
    left: 50vw;
    height: 50vh;
    width:40vw;
    text-align:center;

    display: flex;
    flex-direction: column;
    background-color: #F0F0F0;
    border: solid 1px #F0F0F0;
    padding: 10px;
`
const ItemsList = styled.ul`
    width: 100%;
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