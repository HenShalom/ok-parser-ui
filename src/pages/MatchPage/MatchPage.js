import React, { useState, useEffect } from 'react'
import JsonSchemaPanle from './componetns/fields/JsonSchemaPanle'
import ComparePanle from './componetns/fields/ComparePanle'
import Transformation from './componetns/transformation/Transformation'
import TransformationManu from './componetns/transformation/TransformationManu'
import SelectedTransformation from './componetns/selected/SelectedTransformation'
import JsonShcemaPropertiesBuilder from '../../utils/jsonschema/JsonShcemaPropertiesBuilder'
import './dndStyle.css'
import './MatchPageStyle.css'


function MatchPage({ jsonSchema, inputSchema, completeParserCreation, mapPairs }) {
  const [properties, setProperties] = useState([])
  const [inputProps, setInputProps] = useState([])
  const [pairs, setpairs] = useState(mapPairs || [])
  const [transformItem, setTransformItem] = useState(null)
  const [preTransformPair, setPreTransformPair] = useState(null)


  useEffect(() => {
    const builder = new JsonShcemaPropertiesBuilder()
    builder.loadProperties(jsonSchema)
    setProperties(builder.getProperties())
  }, [jsonSchema])

  useEffect(() => {
    const builder = new JsonShcemaPropertiesBuilder()
    builder.loadProperties(inputSchema)
    setInputProps(builder.getProperties())
  }, [inputSchema])



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
        <ComparePanle properties={inputProps} isTransformation={!!transformItem} />
        <div className="transform-container">
          <Transformation updateTrasnformItem={updateTrasnformItem} transformPair={preTransformPair} dropedItem={transformItem} />
          {preTransformPair && <TransformationManu addPair={addPairWithTransformation} />}
        </div>
        {properties && <JsonSchemaPanle properties={properties}
          addPair={transformItem ? addTransformPair : addPair}
          customDrop={preTransformPair ? null : transformItem} />}

      </div>
      <SelectedTransformation pairs={pairs} />
      <div className="complete-button" onClick={() => completeParserCreation(pairs)}>Complete</div>
    </div>
  );
}

export default MatchPage;
