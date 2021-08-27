import React from 'react'
import { connect } from 'react-redux';
import Reorder from './Reorder';

function Warehouse({ reorders }) {

  return (
    <div className="warehouse">
      <div className="pending">
        <h2>Unprocessed Orders</h2>
        <div>
          {
            reorders.map(reorder =>(
              !reorder.processed &&
              <Reorder key={reorder.id} reorder={reorder} />
            )
            )
          }
        </div>
      </div>
      <div className="processed">
        <h2>Processed Orders</h2>
        <div>
          {
            reorders.map(reorder =>(
              reorder.processed &&
              <Reorder key={reorder.id} reorder={reorder} />
            )
            )
          }
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  reorders: state.reorders,
});

export default connect(mapStateToProps, null)(Warehouse)