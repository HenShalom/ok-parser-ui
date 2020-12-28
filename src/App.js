import React, { useState } from 'react'
import MatchPage from './pagas/MatchPage/MatchPage'
import InputPage from './pagas/InputPage/InputPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import testSchema from './consts/testSchema'
import JsonShcemaPropertiesBuilder from './utils/jsonschema/JsonShcemaPropertiesBuilder'
import './App.css';


const getInputProps = (inputSchema) => {
  if (!inputSchema) return null
  const builder = new JsonShcemaPropertiesBuilder()
  builder.loadProperties(testSchema)
  return builder.getProperties()

}

function App() {
  const [inputSchema, setInputSchema] = useState(null)
  const inputProps = getInputProps(inputSchema)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {inputProps ?
          <MatchPage inputProperties={inputProps} jsonSchema={testSchema} /> :
          <InputPage laodJsonSchema={setInputSchema} />
        }
      </div>
    </DndProvider>
  );
}

export default App;
