import React from 'react'

import {Card, Image, ProductTitle, ProductPrice, ButtonAddToCart, ProductInfoContainer, ButtonContainer, CardBottom, BagIcon, SpanButtonText}  from './styleProductCard'

import bagicon from '../../img/shoping-cart-icon.png'


class ProductCard extends React.Component {

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
                        <ButtonAddToCart onClick={() => this.props.onAdd(this.props.id, this.props.name, this.props.price)}>
                            <SpanButtonText>Adicionar à sacola</SpanButtonText><BagIcon src={bagicon}/> 
                        </ButtonAddToCart>
                    </ButtonContainer>
                </CardBottom>
            </Card>
        )

    }
}

export default ProductCard