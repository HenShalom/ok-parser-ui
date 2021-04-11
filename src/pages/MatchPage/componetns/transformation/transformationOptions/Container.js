import React, { useState } from 'react'
import Modal from 'react-modal'
import DataFromatting from './options/DateFormating'
import transformations from '../../../../../consts/transformations'
import { DATE_FORMAT_MODAL } from '../../../../../consts/transformationModals'

import './ContainerStyle.css'

const getModalSettings = transformationId => {
  if (!transformationId) return null
  const modal = transformations[transformationId].modal
  switch (modal) {
    case DATE_FORMAT_MODAL:
      return DataFromatting
    default:
      return null
  }
}

function TransformationOptionsContainer ({
  isOpen,
  onRequestClose,
  addTransformation,
  transformation
}) {
  const [transformationSettings, setTransformationSettings] = useState({})

  const onChange = changeData => {
    setTransformationSettings(
      Object.assign({}, transformationSettings, changeData)
    )
  }

  const ModalSettings = getModalSettings(transformation)

  return (
    <Modal
      ariaHideApp={false}
      className="transformation-modal"
      overlayClassName="transformation-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="transformation-name">Date Formatting:</div>
      {ModalSettings && (
        <ModalSettings onChange={onChange} settings={transformationSettings} />
      )}
      <div className="transformation-modal-container">
        <div
          className="modal-button ok"
          onClick={() => addTransformation(transformationSettings)}
        >
          Add
        </div>
        <div className="modal-button cancel" onClick={onRequestClose}>
          Cancel
        </div>
      </div>
    </Modal>
  )
}

export default TransformationOptionsContainer
