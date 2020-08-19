import React from 'react';
import Filter from './assets/components/FilterBar/FilterBar'

const products = [
  { img: "src", name: "Item 1", price: 100},
  { img: "src", name: "Item 2", price: 90},
  { img: "src", name: "Item 3", price: 80},
  { img: "src", name: "Item 4", price: 50},
  { img: "src", name: "Item 5", price: 110},
  { img: "src", name: "Item 6", price: 30},
  { img: "src", name: "Item 7", price: 100},
  { img: "src", name: "Item 8", price: 70}
]

class App extends React.Component {

  state = {
    products: products,
    valorInputMin: "",
    valorInputMax: ""
  }

  render() {
    return (
      <div className="App">
        <Filter onChangeFilterBar={}/>
        <div>
          {this.state.products.map((prod) => {
            return <div>{prod.name}</div>
          })}
          </div>
        {/* GRID DE PRODUTOS */}
        {/* SHOPPING CART RENDERIZADO CONDICIONALMENTE       */}
      </div>
    );
  }
}

export default App;
