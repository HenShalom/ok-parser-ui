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


  return (<div className={`box-outer  ${property.disabled && "disabled"}`} ref={dropRef} onClick={checkCustomDrop}>
    <div className={`main_box ${(canDrop || canClick) && "drop-zone"} ${property.disabled && "disabled"} ${property.childOfComplex && "array"}`} style={{ width: `calc(${BASE_WIDTH} - ${offset}px)`, marginLeft: offset }}>
      <div className="property-text-container">
        <div className="propery-key">
          {property.key}
        </div>
        {property.description && <div className="property-spacer">-</div>}

        <div className="text-description ">
          <span>{property.description}</span>
        </div>
      </div>
    </div>
  </div>

  );
}

export default DropItem;
