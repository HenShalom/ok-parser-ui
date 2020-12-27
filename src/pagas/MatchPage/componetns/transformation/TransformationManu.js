import React, { useState } from 'react'
import transformations from '../../../../consts/transformations'
import TransformationOptionsContainer from './transformationOptions/Container'
import "./TransformationManu.css"

const BASE_DELAY = 1;
const MULTIPLAYER_DELAY = 0.1;

function TransformationManu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => setIsOpen(false)

  const selectTransformation = () => {
    setIsOpen(true)
  }

  return (<div className="transformation-select">
    <TransformationOptionsContainer isOpen={isOpen} onRequestClose={handleCloseModal} />
    {
      Object.entries(transformations).map(([id, { name }], i) => (
        <div className="transformation-container" id={id}>
          <div className="transformation-option" style={{ animationDelay: `${BASE_DELAY + i * MULTIPLAYER_DELAY}s` }} onClick={() => selectTransformation(id)}>
            {name}
          </div>
        </div>
      ))
    }
  </div >)
}

export default TransformationManu;
