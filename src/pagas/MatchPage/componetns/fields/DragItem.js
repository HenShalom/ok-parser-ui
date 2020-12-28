import React from 'react'
import { useDrag } from 'react-dnd'
import { BASE_OFFSET, BASE_WIDTH } from '../../../../consts/const'
import { getPropType } from '../utils'

function DragItem({ property }) {

  const [{ draging }, dragRef] = useDrag({
    item: { type: getPropType(property, "drag"), property },
    collect: (monitor) => ({
      draging: !!monitor.isDragging()
    })
  })

  const offset = property.level.length * BASE_OFFSET

  return <div className={`box-outer ${property.disabled && "disabled"} `} ref={dragRef}  >
    <div className={`main_box ${property.disabled && "disabled"} ${property.childOfComplex && "array"}`} style={{ width: `calc(${BASE_WIDTH} - ${offset}px)`, marginLeft: offset }}>
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
}

export default DragItem;
