import React from 'react';
import Filter from './assets/components/FilterBar/FilterBar'
import ProductCard from './assets/components/ProductCard/ProductCard'

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
        <Filter

        />
        {/* RENDERIZA PRODUTOS CONFORME FILTRO */}
        <ProductCard />
        {/* RENDERIZA SHOPPING CART CONFORME CLICK EM BOTÃO/ÍCONE*/}
      </div>
    );
  }
}

export default App;
