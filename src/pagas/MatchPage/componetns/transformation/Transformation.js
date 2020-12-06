import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { BASE_OFFSET, BASE_WIDTH } from '../../../../consts/const'
import { DEFAULT, ARRAY_CHILD } from '../utils'

function Transformation({ updateTrasnformItem, dropedItem }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
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



  return (<div ref={dropRef} >
    <img alt="tranform"
      className={`transform-icon ${dropedItem && "active"} ${canDrop && "pre-active"}`}
      src="./transform.png" />

  </div>)
}

export default Transformation;
