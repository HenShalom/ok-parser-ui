import React, { useState } from 'react'
import MatchPage from './pagas/MatchPage/MatchPage'
import InputPage from './pagas/InputPage/InputPage'
import { useTheme } from './theme/index'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import WelcomePage from './pagas/WelcomePage'
import ParserOverlay from './pagas/ParserOverlay'
import TestParser from './pagas/TestParser'
import ExportParser from './pagas/ExportParser'
import testSchema from './consts/testSchema'
import * as stages from './consts/stages'

import './App.css';



function App() {
  const [startParser, setStartParser] = useState(false)

  const [inputSchema, setInputSchema] = useState(null)
  const [mapPairs, setMapPairs] = useState(null)

  const [stage, setStage] = useState(stages.INPUT_SELECTION)
  const theme = useTheme()


  const completeInputSchema = (jsonSchema) => {
    setInputSchema(jsonSchema)
    setStage(stages.PARSER_CREATION)
  }


  const completeParserCreation = (pairs) => {
    setMapPairs(pairs)
    setStage(stages.PARSER_TEST)
  }


  const completeTestParser = () => {
    setStage(stages.PARSER_EXPORT)
  }


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App" style={{ backgroundColor: theme.background }}>
        {startParser ?
          <ParserOverlay selectedStage={stage}

          >
            {(stage === stages.INPUT_SELECTION) && <InputPage inputSchema={testSchema} completeInputSchema={completeInputSchema} />}
            {(stage === stages.PARSER_CREATION) && <MatchPage jsonSchema={testSchema}
              inputSchema={inputSchema}
              mapPairs={mapPairs}
              completeParserCreation={completeParserCreation} />
            }
            {(stage === stages.PARSER_TEST) && <TestParser completeTestParser={completeTestParser} />}
            {(stage === stages.PARSER_EXPORT) && <ExportParser />}
          </ParserOverlay> :
          <WelcomePage startParser={() => setStartParser(true)} />
        }
      </div>
    </DndProvider>
  );
}

export default App;
