import React from 'react'
import { useDrop } from 'react-dnd'
import { DEFAULT, ARRAY_CHILD } from '../utils'

function Transformation({ updateTrasnformItem, dropedItem, transformPair }) {
  const [{ canDrop }, dropRef] = useDrop({
    accept: [DEFAULT, ARRAY_CHILD],
    canDrop: () => true,
    drop: (value) => {
      updateTrasnformItem(value)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });


  return (<div ref={dropRef} className="transform-icon-container">
    <img alt="tranform"
      className={`transform-icon ${transformPair && "active"} ${dropedItem && "pre-active"}`}
      src="./transform.png" />
    <div className={`transform-icon-text ${transformPair && "active"}  ${dropedItem && "pre-active"}`}>
      {dropedItem ? "Select output to transform into" : "Drag input to transform data"}
    </div>


  </div>)
}

export default Transformation;
