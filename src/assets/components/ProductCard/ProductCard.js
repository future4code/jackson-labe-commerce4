import React from 'react'

import {Card, Image, ProductTitle, ProductPrice, ButtonAddToCart, ProductInfoContainer, ButtonContainer, CardBottom, BagIcon, SpanButtonText}  from './styleProductCard'

import bagicon from '../../img/shoping-cart-icon.png'


class ProductCard extends React.Component {


    state = {
        shoppingItems: [],
        totalAPagar: 0
    }

    addToCart = () => {
        const novoObjeto = {id: this.props.id, nome: this.props.name, price: this.props.price}
        const novoArrayDeItems = [...this.state.shoppingItems, novoObjeto]
        console.log(novoArrayDeItems)
    
        this.setState({ shoppingItems: novoArrayDeItems, totalAPagar: (this.state.totalAPagar + novoObjeto.price)})
        
        // props.addItemArray(novoArrayDeItems)
    }

    render() {
        return (
            <Card id={this.props.id}>
                <Image src={this.props.image}/>
                <CardBottom>
                    <ProductInfoContainer>
                        <ProductTitle>{this.props.name}</ProductTitle>
                        <ProductPrice>R${this.props.price}</ProductPrice>
                    </ProductInfoContainer>
                    <ButtonContainer>
                        <ButtonAddToCart onClick={this.addToCart}>
                            <SpanButtonText>Adicionar à sacola</SpanButtonText><BagIcon src={bagicon}/> 
                        </ButtonAddToCart>
                    </ButtonContainer>
                </CardBottom>
            </Card>
        )

    }
}

export default ProductCard