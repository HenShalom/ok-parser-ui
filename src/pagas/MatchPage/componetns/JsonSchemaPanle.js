import React from 'react'
import DropItem from './DropItem'


function JsonSchemaPanle({ properties, addPair }) {

  return (
    <div className="property-container">
      {properties.filter(p => p.visable).map(property => (<DropItem key={property.getID()} addPair={addPair} property={property} />))}
    </div>

  );
}

export default JsonSchemaPanle;
