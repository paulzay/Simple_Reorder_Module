import React from 'react';

export default function Product({ product }) {
  const handleClick = () =>{
    console.log('clicked')
  };
  return (
    <tr>
      <td>{product.name}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td><a target="_blank" rel="noreferrer" alt="product image" href={product.imageURL}>View</a></td>
      <td><button type="submit" onClick={handleClick}>SELL</button></td>
    </tr>
  )
}
