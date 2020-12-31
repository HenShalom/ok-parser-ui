import React, { useState } from 'react'
import JsonSchemaSettings from './InputSettings/JsonSchemaSettings'
import './InputPageStyle.css'

const INPUT_TYPES = [
  "Schema",
  "Auto Detect"
]

const SOURCES = {
  "Schema": [
    "JSON Schema",
  ],
  "Auto Detect": [
    "Kafka",
    "CSV",
    "JSON Sample"
  ]
}


const SelectedInput = ({ name, value, setValue }) => {
  return <div onClick={() => value === name ? setValue(null) : setValue(name)}
    className={"input-options " + (value === name ? "active" : "")}>
    {name}
  </div>
}

const CurrentInput = ({ name, onClick }) => {
  return <div
    className="selected-options-option" onClick={onClick}>
    {name}
  </div>
}

const getInputSettings = (input) => {
  if (input === SOURCES.Schema[0])
    return JsonSchemaSettings
  if (input !== null)
    return () => <div className="not-implemented">Not Implemented YET! :)</div>
  return null
}

const InputPage = ({ loadJsonSchema }) => {
  const [selectedInputType, setSelectedInputType] = useState(false)
  const [selectedInput, setSelectedInput] = useState(false)

  const clearOptions = () => {
    setSelectedInput(null)
    setSelectedInputType(null)

  }

  const SettingsWindow = getInputSettings(selectedInput)
  console.log(SettingsWindow)

  return <div className="input-page-container">
    <div className={selectedInputType && selectedInput && "exit"}>
      <div>
        Please Select Input Type:
    </div>
      <div className="options-container">
        {INPUT_TYPES.map(key => (
          <SelectedInput
            key={key}
            name={key}
            value={selectedInputType}
            setValue={setSelectedInputType} />
        ))}
      </div>
      {selectedInputType && <div>
        Please Select Input Source:
    </div>}
      {selectedInputType && <div className="options-container">
        {SOURCES[selectedInputType].map(key => (
          <SelectedInput
            key={key}
            name={key}
            value={selectedInput}
            setValue={setSelectedInput} />
        ))}
      </div>}
    </div>

    <div className={`selected-options ${selectedInputType && selectedInput && "enter"}`}>
      <CurrentInput
        name={selectedInputType}
      />
      <CurrentInput
        name={selectedInput}
      />
      <CurrentInput
        name={"X"}
        onClick={clearOptions}
      />
    </div>

    <div className={"input-settings-container " + (selectedInput ? "active" : "")}>
      {SettingsWindow && <SettingsWindow loadJsonSchema={loadJsonSchema} />}
    </div>
  </div>
}

export default InputPage;