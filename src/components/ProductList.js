import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

function ProductList({products}) {
  return (
      <table className="table">
      <thead>
        <tr>
          
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Image</th>
          <th scope="col">Sell</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(ProductList);