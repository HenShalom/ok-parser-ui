import React from 'react'
import './style.css'

export const TestParser = ({ completeTestParser }) => {
  return (
    <div className="test-parser-container">
      <div className="wip-text">WIP - here you will able to test out your pasreer</div>
      <div className="complete-button" onClick={completeTestParser}>Complete</div>
    </div>
  )
}

export default TestParser