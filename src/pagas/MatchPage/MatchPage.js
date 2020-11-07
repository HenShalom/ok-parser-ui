import React, { useState, useEffect } from 'react'
import JsonSchemaPanle from './componetns/JsonSchemaPanle'
import ComparePanle from './componetns/ComparePanle'
import JsonShcemaPropertiesBuilder from '../../utils/jsonschema/JsonShcemaPropertiesBuilder'
import './dndStyle.css'
import './MatchPageStyle.css'


function MatchPage({ jsonSchema, inputProperties }) {
  const [pairsWindowOpen, setPairsWindowOpen] = useState(false)
  const [properties, setProperties] = useState([])
  const [pairs, setpairs] = useState([])

  useEffect(() => {
    const builder = new JsonShcemaPropertiesBuilder()
    builder.loadProperties(jsonSchema)
    setProperties(builder.getProperties())
  }, [jsonSchema])


  const addPair = (matchProperty, currentProperty) => {
    //todo: add check of type and so on 
    matchProperty.visable = false
    currentProperty.visable = false
    setpairs([...pairs, [matchProperty, currentProperty]])

  }
  const on = true
  return (
    <div className="match-page">
      <div className="match-container">
        <ComparePanle properties={inputProperties} />
        <JsonSchemaPanle properties={properties} addPair={addPair} />

      </div>

      <div className={`pairs-drawer-container ${pairsWindowOpen ? "open" : ""}`}>
        <div className="pairs-drawer ">
          <div className={`drawer-button ${pairsWindowOpen ? "open" : ""}`} onClick={() => setPairsWindowOpen(!pairsWindowOpen)} />
          <div className="pairs-container">
            {pairs.map(([from, to]) => {
              return <div className={`pair ${pairsWindowOpen ? "open" : ""}`}>
                <div className="pair-item">
                  {from.key}
                </div>
                <div className="transfrom-arrow">
                  <div className="long-arrow-right"></div>
                  {on && <div className="pair-item transformation">
                    int to string
                  </div>}
                  {on && <div className="long-arrow-right"></div>}

                </div>
                <div className="pair-item">
                  {to.key}
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchPage;
