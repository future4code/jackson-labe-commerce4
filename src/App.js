import React from 'react';
import Filter from './assets/components/FilterBar/FilterBar'
import ProductCard from './assets/components/ProductCard/ProductCard'
import ShoppingCart from './assets/components/ShoppingCart/ShoppingCart'

import {ProductGrid, ContainerApp} from './styleApp'

const productsDataBase = [
  { id: 1, image: "https://picsum.photos/200/201", name: "Item 1", price: 100},
  { id: 2, image: "https://picsum.photos/200/202", name: "Item 2", price: 90},
  { id: 3, image: "https://picsum.photos/200/203", name: "Item 3", price: 80},
  { id: 4, image: "https://picsum.photos/200/204", name: "Item 4", price: 50},
  { id: 5, image: "https://picsum.photos/200/205", name: "Item 5", price: 110},
  { id: 6, image: "https://picsum.photos/200/206", name: "Item 6", price: 30},
  { id: 7, image: "https://picsum.photos/200/207", name: "Item 7", price: 100},
  { id: 8, image: "https://picsum.photos/200/208", name: "Item 8", price: 70}
]

class App extends React.Component {

  state = {
    products: productsDataBase,
    valorInputMin: 0,
    valorInputMax: Infinity,
    valorSearchText: "",
  }

  updateMinValue = (newMinValue) => {
    this.setState({valorInputMin: newMinValue}, this.filterFunction)
  }
  
  updateMaxValue = (newMaxValue) => {
    this.setState({valorInputMax: newMaxValue}, this.filterFunction)
    
  }
  
  updateSearchValue = (newTextValue) => {
    this.setState({valorSearchText: newTextValue}, this.filterFunction)
  }
  
  filterFunction = () => {
    const filteredProducts = productsDataBase.filter((prod) => {
      if(this.state.valorInputMax !== 0){
        console.log(this.state.valorInputMax)
        return prod.price >= this.state.valorInputMin && prod.price <= this.state.valorInputMax && prod.name.includes(this.state.valorSearchText)
      } else if(this.state.valorInputMax === 0){
        return this.setState({valorInputMax: Infinity}, this.filterFunction)
      }
      
    })
    
    this.setState({ products: filteredProducts })
    
  }

  render() {
   

    return (
      <ContainerApp>
        <Filter
          setNewMinValue={this.updateMinValue}
          setNewMaxValue={this.updateMaxValue}
          setNewTextValue={this.updateSearchValue}
        />
        <ProductGrid>
          {this.state.products.map((prod) => {
          return <ProductCard image={prod.image} name={prod.name} price={prod.price} id={prod.id}/>
          })}
        </ProductGrid>
        <ShoppingCart/>
        {/* RENDERIZA SHOPPING CART CONFORME CLICK EM BOTÃO/ÍCONE*/}
      </ContainerApp>
    );
  }
}

export default App;
