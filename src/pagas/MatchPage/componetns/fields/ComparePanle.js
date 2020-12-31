import React from 'react'
import DragItem from './DragItem';


function ComparePanle({ properties }) {
  return (
    <div className="property-container left-pannel">
      <div className="property-container-title">Input Schema</div>
      {properties.filter(p => p.visable).map(property => (<DragItem key={property.getID()} property={property} />))}
    </div>

  );
}

export default ComparePanle;
