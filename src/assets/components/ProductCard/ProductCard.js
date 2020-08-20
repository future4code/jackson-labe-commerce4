import React from 'react'

import {Card, Image} from './styleProductCard'

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
                <h4>{this.props.name}</h4>
                <p>{this.props.price}</p>
                <button onClick={this.addToCart}>Adicionar ao carrinho</button>
            </Card>
        )

    }
}

export default ProductCard