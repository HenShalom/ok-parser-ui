import './App.css';
import MatchPage from './pagas/MatchPage/MatchPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import JsonShcemaPropertiesBuilder from './utils/jsonschema/JsonShcemaPropertiesBuilder'


const deptSchema = {
  "$id": "https://example.com/arrays.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "A representation of a person, company, organization, or place",
  "type": "object",
  "properties": {
    "fruits": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "vegetables": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "veggieName",
          "veggieLike"
        ],
        "properties": {
          "veggieName": {
            "type": "string",
            "description": "The name of the vegetable."
          },
          "veggieLike": {
            "type": "boolean",
            "description": "Do I like this vegetable?"
          },
        }
      }
    },
    "other":{
      "type": "object",
      "properties": {
        "person":{
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the vegetable. very long test"
            },
            "lastName": {
              "type": "string",
              "description": "Do I like this vegetable?"
            },
            "hobbies": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
}

function App() {
  const builder = new JsonShcemaPropertiesBuilder()
  builder.loadProperties(deptSchema)
  const props = builder.getProperties()

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <MatchPage inputProperties={props||[]} jsonSchema={deptSchema} />
      </div>
    </DndProvider>
  );
}

export default App;
