import React from 'react'
import transformations from '../../../../consts/transformations'
import "./TransformationManu.css"

const BASE_DELAY = 0.1;

function TransformationManu() {
  return (<div className="transformation-select">
    {Object.entries(transformations).map(([id, { name }], i) => (
      <div className="transformation-container">
        <div className="transformation-option" style={{ animationDelay: `${i * BASE_DELAY}s` }} >
          {name}
        </div>
      </div>
    ))}
  </div >)
}

export default TransformationManu;
