import React,{useState} from 'react';

export default function Product({ product, sellProduct }) {
//  const [quantity, setQuantity] = useState(product.quantity)

  // functionality for reordering stock
  function orderStock(){
    console.log('Order more stock bro')
  }

  if(product.quantity <= product.reorder_level){
    orderStock();
  }
  
  return (
    <tr>
      <td>{product.name}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td><a target="_blank" rel="noreferrer" alt="product image" href={product.imageURL}>View</a></td>
      <td><button type="submit" onClick={() => sellProduct(product.id)} disabled={product.quantity > 0 ? '' : 'disabled'}>SELL</button></td>
    </tr>
  )
}
