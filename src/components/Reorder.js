import React from 'react';

export default function Reorder({ reorder,  }) {

  return (
    <div
      className={`reorder ${reorder.processed ? 'processedx' : 'processedy'}`}
    >
      <h3>
        {reorder.name}{' '}<button>{reorder.processed ? 'Dispatch Order' : 'Process Order'}</button>
      </h3>
      <p>{reorder.quantity}</p>
      
    </div>
  )
}
