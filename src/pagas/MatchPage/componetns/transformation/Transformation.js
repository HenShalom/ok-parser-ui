import React from 'react'
import { useDrop } from 'react-dnd'
import { DEFAULT, ARRAY_CHILD } from '../utils'

function Transformation({ updateTrasnformItem, dropedItem, transformPair }) {
  const [{ canDrop }, dropRef] = useDrop({
    accept: [DEFAULT, ARRAY_CHILD],
    canDrop: () => true,
    drop: (value) => {
      console.log(value)
      updateTrasnformItem(value)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  console.log(transformPair)


  return (<div ref={dropRef} className="transform-icon-container">
    <img alt="tranform"
      className={`transform-icon ${transformPair && "active"} ${dropedItem && "pre-active"}`}
      src="./transform.png" />
    <div className={`transform-icon-text ${transformPair && "active"}`}    >
      {dropedItem ? "Select item to transform into" : "Drag input to transform data"}
    </div>


  </div>)
}

export default Transformation;
