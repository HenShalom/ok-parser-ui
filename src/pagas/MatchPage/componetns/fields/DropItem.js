import React from 'react'
import { useDrop } from 'react-dnd'
import { BASE_OFFSET, BASE_WIDTH } from '../../../../consts/const'
import { getPropType } from '../utils'


function DropItem({ property, addPair, customDrop }) {
  const accept = getPropType(property)
  const canClick = customDrop && accept.indexOf(customDrop.type) !== -1
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept,
    canDrop: () => true,
    drop: (value) => addPair(value.property, property),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const checkCustomDrop = () => {
    if (canClick) {
      addPair(customDrop.property, property)
    }
  }

  const offset = property.level.length * BASE_OFFSET


  return (<div className={`box-outer ${property.disabled && "disabled"}`} ref={dropRef} onClick={checkCustomDrop}>
    <div className={`main_box ${property.disabled && "disabled"} ${property.childOfComplex && "array"}`} style={{ width: `calc(${BASE_WIDTH} - ${offset}px)`, marginLeft: offset }}>
      {(canDrop || canClick) &&
        <React.Fragment>
          <div className='bar top'></div>
          <div className='bar right delay'></div>
          <div className='bar bottom delay'></div>
          <div className='bar left'></div>
        </React.Fragment>
      }
      <span>
        {property.key}
      </span>
    </div>
  </div>

  );
}

export default DropItem;
