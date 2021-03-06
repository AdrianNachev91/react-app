import React, { Component } from 'react';
import BuyButton from './BuyButton';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      product: {}
    }
  }

  async componentDidMount() {
    console.log(this.props.match.params.id);
    let response = await fetch("http://localhost:1337/products/" + this.props.match.params.id)
    let data = await response.json()
    this.setState({
      loading: false,
      product: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__impormation">
            <h2 className="Product-title">{this.state.product.name}</h2>
            <img src='http://localhost:3000/images/test.jpg' />
            <div className="clearfix"></div>
            <BuyButton {...this.state} />
          </div>
          <div className="product__description">
            {this.state.product.description}
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;
