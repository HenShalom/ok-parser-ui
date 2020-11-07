import React from 'react'
import { useDrag } from 'react-dnd'
import { BASE_OFFSET, BASE_WIDTH } from '../../../consts/const'


function DragItem({ property }) {

  const [{ draging }, dragRef] = useDrag({
    item: { type: 't', property },
    collect: (monitor) => ({
      draging: !!monitor.isDragging()
    })
  })

  const offset = property.level.length * BASE_OFFSET

  return (
    <div className='box-outer' ref={dragRef} >
      <div className='main_box' style={{ width: `calc(${BASE_WIDTH} - ${offset}px)`, marginLeft: offset }}>
        {draging &&
          <React.Fragment>
            {/* <div className='bar-r top-r'></div>
            <div className='bar-r right-r delay'></div>
            <div className='bar-r bottom-r delay'></div>
            <div className='bar-r left-r'></div> */}
          </React.Fragment>
        }
        {property.key}
      </div>
    </div>

  );
}

export default DragItem;
