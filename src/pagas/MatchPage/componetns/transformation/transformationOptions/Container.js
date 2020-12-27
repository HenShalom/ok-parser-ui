import React, { useState } from 'react'
import Modal from 'react-modal';
import DataFromatting from './options/DateFormating'
import './ContainerStyle.css'


function TransformationOptionsContainer({ isOpen, onRequestClose, transformation }) {
  return (
    <Modal
      className="transformation-modal"
      overlayClassName="transformation-overlay"

      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <DataFromatting />
    </Modal>
  )
}

export default TransformationOptionsContainer;
