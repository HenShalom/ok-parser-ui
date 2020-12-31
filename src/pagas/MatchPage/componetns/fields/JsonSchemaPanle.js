import React from 'react'
import DropItem from './DropItem'


function JsonSchemaPanle({ properties, addPair, customDrop }) {

  return (
    <div className="property-container right-pannel">
      <div className="property-container-title">Output Schema</div>
      {
        properties.filter(p => p.visable)
          .map(property => (<DropItem key={property.getID()} customDrop={customDrop} addPair={addPair} property={property} />))
      }
    </div>

  );
}

export default JsonSchemaPanle;
