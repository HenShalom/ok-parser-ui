import React, { useState } from 'react'
import JsonSchemaSettings from './InputSettings/JsonSchemaSettings'
import './InputPageStyle.css'

const sources = [
  "Kafka",
  "JSON Schema",
  "CSV",
  "JSON Sample"
]


const SelectedInput = ({ name, selectedInput, setSelectedInput }) => {
  return <div onClick={() => selectedInput === name ? setSelectedInput(null) : setSelectedInput(name)}
    className={"input-options " + (selectedInput === name ? "active" : "")}>
    {name}
  </div>
}
const getInputSettings = (input) => {
  if (input === sources[1])
    return JsonSchemaSettings
  return null


}

const InputPage = () => {
  const [selectedInput, setSelectedInput] = useState(false)
  const SettingsWindow = getInputSettings(selectedInput)

  return <div className="input-page-container">
    <div className="input-page-title">Select Schema Input</div>
    <div className={"input-options-container " + (selectedInput ? "active" : "")}>
      {sources.map(key => (
        <SelectedInput
          id={key}
          name={key}
          selectedInput={selectedInput}
          setSelectedInput={setSelectedInput} />
      ))}

    </div>
    <div className={"input-settings-container " + (selectedInput ? "active" : "")}>
      {SettingsWindow && <SettingsWindow />}
    </div>
  </div>
}

export default InputPage;