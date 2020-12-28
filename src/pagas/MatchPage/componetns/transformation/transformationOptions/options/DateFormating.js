import React from 'react'
import { Input, Space } from 'antd';


import './DatFormatting.css'

const inputStyle = {
  width: "30vw",
  height: "6vh",
  margin: "4vh  0 0 4vw",
  borderRadius: "2vh",
  padding: "0vh 1vw",
  outline: "none",
  fontSize: "2vh"
}

function DateFormating({ onChange, settings }) {
  return (<div className="date-format-picker">
    <Space direction="vertical">
      <Input
        size="large"
        onChange={({ target }) => { onChange({ in: target.value }) }}
        id='date-in'
        name='date format in'
        placeholder='YYYY-MM-DD HH:mm'
        style={inputStyle}
      />
      <Input
        size="large"
        onChange={({ target }) => { onChange({ out: target.value }) }}
        value={settings.out}
        id='date-out'
        name='date format out'
        placeholder='YYYY-MM-DD'
        style={inputStyle}

      />
    </Space>

  </div >)
}

export default DateFormating;
