import React, { useState, useEffect } from 'react'
import JsonSchemaPanle from './componetns/fields/JsonSchemaPanle'
import ComparePanle from './componetns/fields/ComparePanle'
import Transformation from './componetns/transformation/Transformation'
import TransformationManu from './componetns/transformation/TransformationManu'
import SelectedTransformation from './componetns/selected/SelectedTransformation'
import JsonShcemaPropertiesBuilder from '../../utils/jsonschema/JsonShcemaPropertiesBuilder'
import './dndStyle.css'
import './MatchPageStyle.css'


function MatchPage({ jsonSchema, inputProperties }) {
  const [properties, setProperties] = useState([])
  const [pairs, setpairs] = useState([])
  const [transformItem, setTransformItem] = useState(null)
  const [preTransformPair, setPreTransformPair] = useState(null)


  useEffect(() => {
    const builder = new JsonShcemaPropertiesBuilder()
    builder.loadProperties(jsonSchema)
    setProperties(builder.getProperties())
  }, [jsonSchema])


  const addPair = (input, output, transformation) => {
    setTransformItem(null)
    //todo: add check of type and so on 
    input.hideProperty()
    output.hideProperty()
    setpairs([...pairs, { input, output, transformation }])
  }

  const addPairWithTransformation = (transformation, transformationSettings) => {
    addPair(preTransformPair.input, preTransformPair.output, { transformation, settings: transformationSettings })
    setPreTransformPair(null)
  }

  const addTransformPair = (input, output) => {
    setPreTransformPair({ input, output })

  }

  const updateTrasnformItem = (value) => {
    setTransformItem(value)
  }

  return (
    <div className="match-page">
      <div className="match-container">
        <ComparePanle properties={inputProperties} />
        <div className="transform-container">
          <Transformation updateTrasnformItem={updateTrasnformItem} transformPair={preTransformPair} dropedItem={transformItem} />
          {preTransformPair && <TransformationManu addPair={addPairWithTransformation} />}
        </div>
        <JsonSchemaPanle properties={properties}
          addPair={transformItem ? addTransformPair : addPair}
          customDrop={preTransformPair ? null : transformItem} />

      </div>
      <SelectedTransformation pairs={pairs} />
    </div>
  );
}

export default MatchPage;
