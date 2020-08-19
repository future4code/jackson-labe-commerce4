import React from 'react';
import styled from 'styled-components'
import Filter from './assets/components/FilterBar/FilterBar'
import ProductCard from './assets/components/ProductCard/ProductCard'

const productsDataBase = [
  { image: "https://picsum.photos/200/201", name: "Item 1", price: 100},
  { image: "https://picsum.photos/200/202", name: "Item 2", price: 90},
  { image: "https://picsum.photos/200/203", name: "Item 3", price: 80},
  { image: "https://picsum.photos/200/204", name: "Item 4", price: 50},
  { image: "https://picsum.photos/200/205", name: "Item 5", price: 110},
  { image: "https://picsum.photos/200/206", name: "Item 6", price: 30},
  { image: "https://picsum.photos/200/207", name: "Item 7", price: 100},
  { image: "https://picsum.photos/200/208", name: "Item 8", price: 70}
]

const ProductGrid = styled.span`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5px;
  margin: 20px;
`

class App extends React.Component {

  state = {
    products: productsDataBase,
    valorInputMin: "",
    valorInputMax: "",
    valorSearchText: ""
  }

  filterFunction = (newMinValue, newMaxValue) => {
    
    const filteredProducts = productsDataBase.filter((prod) => {
      return newMinValue < prod.price
    })
    
    this.setState({ products: filteredProducts, valorInputMin: newMinValue, valorInputMax: newMaxValue})

  }

  render() {
    return (
      <div className="App">
        <Filter
          onChangeAllFilters={this.filterFunction}
        />
        <ProductGrid>
          {this.state.products.map((prod) => {
          return <ProductCard image={prod.image} name={prod.name} price={prod.price} />
          })}
        </ProductGrid>
        {/* RENDERIZA SHOPPING CART CONFORME CLICK EM BOTÃO/ÍCONE*/}
      </div>
    );
  }
}

export default App;
