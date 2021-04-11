import React, { useState } from 'react'
import JSONInput from 'react-json-editor-ajrm';
import './style.css'



const JsonSchemaSettings = ({ loadJsonSchema }) => {
  const [jsonData, setJsonData] = useState(null)

  return <div className="json-schema-settings-container">
    <JSONInput
      style={{ body: { fontSize: 20 } }}
      id='a_unique_id'
      placeholder={{ "whatToDo": "place json schema here" }}
      height='70vh'
      width='60vw'
      onChange={({ jsObject }) => setJsonData(jsObject)}
    />
    <div className="start-button" onClick={() => loadJsonSchema(jsonData)}>
      Done
    </div>
  </div>
}

export default JsonSchemaSettings;