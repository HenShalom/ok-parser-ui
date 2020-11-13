import React from 'react'
import { useDrop } from 'react-dnd'
import { BASE_OFFSET, BASE_WIDTH } from '../../../consts/const'
import { DEFAULT } from './utils'

function Transformation() {

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept:  DEFAULT,
    canDrop: () => true,
    drop: (value) => {
      console.log(value)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });



  return (<div className={`box-outer `} ref={dropRef} >
    <div className={`main_box `} >
      {canDrop &&
        <React.Fragment>
          <div className='bar top'></div>
          <div className='bar right delay'></div>
          <div className='bar bottom delay'></div>
          <div className='bar left'></div>
        </React.Fragment>
      }
      <span>
        test
      </span>
    </div>
  </div>)
}

export default Transformation;
