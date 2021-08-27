import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

function ProductList({products, sellProduct}) {
  return (
    <table className="table">
      <thead>
        <tr>
          
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => (
            <Product key={product.id} product={product} sellProduct={sellProduct} />
          ))
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  sellProduct: id => {
    dispatch({ id, type: 'SELL' });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);