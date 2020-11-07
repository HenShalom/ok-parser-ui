import React from 'react'
import { useDrop } from 'react-dnd'
import { BASE_OFFSET, BASE_WIDTH } from '../../../consts/const'


function DropItem({ property, addPair }) {

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: 't',
    canDrop: () => true,
    drop: (value) => addPair(value.property, property),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const offset = property.level.length * BASE_OFFSET


  return (<div className='box-outer' ref={dropRef} >
    <div className='main_box' style={{ width: `calc(${BASE_WIDTH} - ${offset}px)`, marginLeft: offset }}>
      {canDrop &&
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
