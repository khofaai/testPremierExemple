import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Yeezy', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ],
      selectedProducts: [],
    }
  }
  handleProductSelect (product) {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      }
    });
  }
  render() {
    return (
      <div className="App">
       <h1>My Product Store</h1>
       <p>You have selected {this.state.selectedProducts.length} product(s).</p>
        <ProductList
          products={this.state.products}
          onProductSelect={this.handleProductSelect.bind(this)}
        />
      </div>
    );
  }
}

export default App;
