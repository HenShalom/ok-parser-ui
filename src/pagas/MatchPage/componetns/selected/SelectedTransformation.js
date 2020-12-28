import React, { useState } from 'react'
import transformations from '../../../../consts/transformations'


function SelectedTransformation({ pairs }) {
  const [pairsWindowOpen, setPairsWindowOpen] = useState(false)

  return (<div className={`pairs-drawer-container ${pairsWindowOpen ? "open" : ""}`}>
    <div className="pairs-drawer ">
      <div className={`drawer-button ${pairsWindowOpen ? "open" : ""}`} onClick={() => setPairsWindowOpen(!pairsWindowOpen)} >
        {pairsWindowOpen ? "close" : "open"}
      </div>
      <div className="pairs-container" id="style-2">
        {pairs.map(({ input, output, transformation: { transformation } }) => {
          return <div className={`pair ${pairsWindowOpen ? "open" : ""}`} key={input.key + output.key}>
            <div className="pair-item">
              {input.key}
            </div>
            <div className="transfrom-arrow">
              <div className="long-arrow-right"></div>
              {transformation && <div className="pair-item transformation">
                {transformations[transformation].name}
              </div>}
              {transformation && <div className="long-arrow-right"></div>}

            </div>
            <div className="pair-item">
              {output.key}
            </div>
          </div>
        })}
      </div>
    </div>
  </div>)
}

export default SelectedTransformation;
