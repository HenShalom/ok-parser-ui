import './App.css';
import MatchPage from './pagas/MatchPage/MatchPage'
import InputPage from './pagas/InputPage/InputPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import testSchema from './consts/testSchema'
import JsonShcemaPropertiesBuilder from './utils/jsonschema/JsonShcemaPropertiesBuilder'

function App() {
  const builder = new JsonShcemaPropertiesBuilder()
  builder.loadProperties(testSchema)
  const props = builder.getProperties()

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <InputPage />
        {/* <MatchPage inputProperties={props ||[]} jsonSchema={testSchema} /> */}
      </div>
    </DndProvider>
  );
}

export default App;
