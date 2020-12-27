import React, { useState } from 'react'
import Modal from 'react-modal';
import DataFromatting from './options/DateFormating'

import './ContainerStyle.css'


function TransformationOptionsContainer({ isOpen, onRequestClose, addTransformation, transformation }) {
  const [transformationSettings, setTransformationSettings] = useState({})
  return (
    <Modal
      className="transformation-modal"
      overlayClassName="transformation-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="transformation-name">
        Date Formatting:
      </div>
      <DataFromatting onChange={setTransformationSettings} settings={transformationSettings} />
      <div className="transformation-modal-container">
        <div className="modal-button ok"
          onClick={addTransformation}>
          Add
           </div>
        <div className="modal-button cancel"
          onClick={onRequestClose}>
          Cancel
           </div>
      </div>
    </Modal>
  )
}

export default TransformationOptionsContainer;
