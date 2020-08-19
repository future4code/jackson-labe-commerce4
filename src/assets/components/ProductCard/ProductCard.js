import React from 'react'

import {Card, Image} from './styleProductCard'

class ProductCard extends React.Component {

    addToCart = () => {
        //console.log("Adicionar ao carrinho")
    }

    render() {

        return (
            <Card>
                <Image src={this.props.image}/>
                <h4>{this.props.name}</h4>
                <p>{this.props.price}</p>
                <button onClick={this.addToCart()}>Adicionar ao carrinho</button>
            </Card>
        )

    }
}

export default ProductCard