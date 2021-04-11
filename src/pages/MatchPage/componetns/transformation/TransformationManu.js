import React, { useState } from 'react'
import transformations from '../../../../consts/transformations'
import TransformationOptionsContainer from './transformationOptions/Container'

import "./TransformationManu.css"

const BASE_DELAY = 0.5;
const MULTIPLAYER_DELAY = 0.1;

function TransformationManu({ addPair }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTransforamtion, setSelectedTransforamtion] = useState(null)

  const handleCloseModal = () => setIsOpen(false)

  const selectTransformation = (id) => {
    setSelectedTransforamtion(id)
    setIsOpen(true)
  }
  const addTransformation = (transformation) => {
    addPair(selectedTransforamtion, transformation)
    setIsOpen(false)
  }

  const transformationsClick = (id) => () => {
    if (transformations[id].modal)
      selectTransformation(id)
    else
      addPair(id, {})
  }

  return (<div className="transformation-select">
    <TransformationOptionsContainer isOpen={isOpen}
      addTransformation={addTransformation}
      onRequestClose={handleCloseModal}
      transformation={selectedTransforamtion} />

    {
      Object.entries(transformations).map(([id, { name }], i) => (
        <div className="transformation-container" key={id}>
          <div className="transformation-option" style={{ animationDelay: `${BASE_DELAY + i * MULTIPLAYER_DELAY}s` }} onClick={transformationsClick(id)}>
            {name}
          </div>
        </div>
      ))
    }
  </div >)
}

export default TransformationManu;
