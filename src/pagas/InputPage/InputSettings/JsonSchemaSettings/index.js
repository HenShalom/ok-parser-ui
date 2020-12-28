import React from 'react'
import JSONInput from 'react-json-editor-ajrm';
import './style.css'



const JsonSchemaSettings = ({ laodJsonSchema }) => {
  return <div className="json-schema-settings-container">
    <JSONInput
      style={{ body: { fontSize: 20 } }}
      id='a_unique_id'
      placeholder={{ "whatToDo": "place json schema here" }}
      height='70vh'
      width='35vw'
    />
    <div className="start-button" onClick={laodJsonSchema}>
      Done
    </div>
  </div>
}

export default JsonSchemaSettings;