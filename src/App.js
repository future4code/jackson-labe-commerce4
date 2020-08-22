import React from 'react';
import Filter from './assets/components/FilterBar/FilterBar'
import ProductCard from './assets/components/ProductCard/ProductCard'
import ShoppingCart from './assets/components/ShoppingCart/ShoppingCart'

import {ProductGrid, ContainerApp, Header, Logo, Magalu, ShoppingCartButton, LabelShoppingCartButton, Magalogo,ShoppingButtonContainer} from './styleApp'

import logo from './assets/img/Labelu.png'
import magalu from './assets/img/magalu.png'
import astronauta from './assets/img/astronauta.png'
import shoppingcartimage from './assets/img/shoping-cart-icon.png'

const productsDataBase = [
  { id: 2, image: "https://source.unsplash.com/800x600/?spacesuit", name: "Traje de astronauta", price: 900},
  { id: 1, image: "https://source.unsplash.com/800x600/?space", name: "Viagem intergalática", price: 1999},
  { id: 3, image: "https://source.unsplash.com/800x600/?astronaut", name: "Curso na Nasa", price: 200},
  { id: 4, image: "https://source.unsplash.com/800x600/?galaxy", name: "Telescópio espacial", price: 500},
  { id: 5, image: "https://source.unsplash.com/800x600/?satellite", name: "Satélite usado", price: 780},
  { id: 6, image: "https://source.unsplash.com/800x600/?microorganism", name: "Amostra de vida alienígena", price: 300},
  { id: 7, image: "https://source.unsplash.com/800x600/?nightsky", name: "Estrela cadente", price: 100},
  { id: 8, image: "https://source.unsplash.com/800x600/?startrek", name: "Nave espacial", price: 1090}
]

class App extends React.Component {

  state = {
    products: productsDataBase,
    valorInputMin: 0,
    valorInputMax: Infinity,
    valorSearchText: "",
    shoppingCartVisibility: false,
    shoppingItems: [],
    subtotal: 0,
    totalItens: 0,
  }

  updateMinValue = (newMinValue) => {
    this.setState({valorInputMin: newMinValue}, this.filterFunction)
  }
  
  updateMaxValue = (newMaxValue) => {
    this.setState({valorInputMax: newMaxValue}, this.filterFunction)
    
  }
  
  updateSearchValue = (newTextValue) => {

    this.setState({valorSearchText: newTextValue }, this.filterFunction)
  }
  
  filterFunction = () => {
    const filteredProducts = productsDataBase.filter((prod) => {
      if(this.state.valorInputMax !== 0){
        return prod.price >= this.state.valorInputMin && prod.price <= this.state.valorInputMax && prod.name.includes(this.state.valorSearchText)
      } else if(this.state.valorInputMax === 0){
        return this.setState({valorInputMax: Infinity}, this.filterFunction)
      }
      
    })
    
    this.setState({ products: filteredProducts })
    
  }

  changeCartVisibility = () => {
    this.setState({ shoppingCartVisibility: !this.state.shoppingCartVisibility })
  }

  addToCart = (id, name, price) => {
    
    
    let existe = this.state.shoppingItems.some((item) => {
      return id === item.id
    })
    
    if(existe) {
      const novaLista = []
      for(let i=0; i<this.state.shoppingItems.length; i++) {
        let item = this.state.shoppingItems[i]
        if(id === item.id) {
          item.qnt +=1
        }
        novaLista.push(item)
      }
      this.setState({ shoppingItems: novaLista, subtotal: (this.state.subtotal + price)})

    } else {
      const addedItem = {id: id, name: name, price: price, qnt:1}
      const addedItemsArray = [...this.state.shoppingItems, addedItem]
      this.setState({ shoppingItems: addedItemsArray, subtotal: (this.state.subtotal + addedItem.price)})
    }
}


  render() {

    return (
      <div>
        <Header>
          <Magalogo>
            <Magalu src={astronauta}/>
            <Logo src={logo}/>
          </Magalogo>
          <Filter
            setNewMinValue={this.updateMinValue}
            setNewMaxValue={this.updateMaxValue}
            setNewTextValue={this.updateSearchValue}
          />
          <ShoppingButtonContainer>
            <ShoppingCartButton src={shoppingcartimage} onClick={this.changeCartVisibility} />
            <LabelShoppingCartButton onClick={this.changeCartVisibility}>Adicione itens!</LabelShoppingCartButton>
          </ShoppingButtonContainer>
        </Header>

        <ContainerApp>
        <ProductGrid>
          {this.state.products.map((prod) => {
          return(
          <ProductCard image={prod.image} name={prod.name} price={prod.price} id={prod.id}
          onAdd={this.addToCart}
          />) 
          })}
        </ProductGrid>
        <div>
          {this.state.shoppingCartVisibility && <ShoppingCart putInCart={this.state.shoppingItems} sendSubtotal={this.state.subtotal}/>}
        </div>
      </ContainerApp>
      </div>
    );
  }
}

export default App;
