import React from 'react'

import {Card, Image} from './styleProductCard'

class ProductCard extends React.Component {

    addToCart = () => {
        const choseItem = this.props.id
        console.log(choseItem)
    }

    render() {

        return (
            <Card id={this.props.id}>
                <Image src={this.props.image}/>
                <h4>{this.props.name}</h4>
                <p>{this.props.price}</p>
                <button onClick={this.addToCart}>Adicionar ao carrinho</button>
            </Card>
        )

    }
}

export default ProductCard