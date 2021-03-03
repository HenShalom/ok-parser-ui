import React from 'react'
import OverlayHeader from './componetns/Header'
import * as stages from '../../consts/stages'
import './style.css'

const isStageActive = (stageName) => (currentStage) => {
  return stageName === currentStage
}
export const ParserOverlay = (props) => {
  const { selectedStage } = props
  return (
    <div className="parser-overlay-container">
      <OverlayHeader />
      <div className="page-container">
        <div className="stage-viewer">
          <div className={`stage-viewer-stage ${isStageActive(stages.INPUT_SELECTION)(selectedStage) && "active"}`}>
            Select Input
        </div>
          <div className={`stage-viewer-stage ${isStageActive(stages.PARSER_CREATION)(selectedStage) && "active"}`}>
            Create Parser
        </div>
          <div className={`stage-viewer-stage ${isStageActive(stages.PARSER_TEST)(selectedStage) && "active"}`}>
            Test Parser
        </div>
          <div className={`stage-viewer-stage ${isStageActive(stages.PARSER_EXPORT)(selectedStage) && "active"}`}>
            Export :)
        </div>

        </div>
        <div className="stage-container">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ParserOverlay