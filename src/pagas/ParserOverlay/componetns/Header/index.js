import React from 'react'
import { ReactComponent as Logo } from '../../../../logo.svg'
import './style.css'

export const OverlayHeader = (props) => {
  return (
    <div className="overlay-header">
      <Logo className="header-logo" />
    </div>
  )
}

export default OverlayHeader