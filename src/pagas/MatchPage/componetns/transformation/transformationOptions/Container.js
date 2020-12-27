import React, { useState } from 'react'
import Modal from 'react-modal';
import DataFromatting from './options/DateFormating'

import './ContainerStyle.css'


function TransformationOptionsContainer({ isOpen, onRequestClose, addTransformation, transformation }) {
  const [transformationSettings, setTransformationSettings] = useState({})

  const onChange = (changeData) => {
    setTransformationSettings(Object.assign({}, transformationSettings, changeData))
  }

  return (
    <Modal
      ariaHideApp={false}
      className="transformation-modal"
      overlayClassName="transformation-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="transformation-name">
        Date Formatting:
      </div>
      <DataFromatting onChange={onChange} settings={transformationSettings} />
      <div className="transformation-modal-container">
        <div className="modal-button ok"
          onClick={() => addTransformation(transformationSettings)}>
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
