import React from 'react'
import { Box, Flex } from 'rebass'
import { Label, Input } from '@rebass/forms'

import './DatFormatting.css'

function DateFormating() {
  return (<div className="date-format-picker">
    <Flex pl="2vw"
      pt="2vh"
      flexDirection="column"
      sx={{ width: "80%" }}>
      <Box mt="4vh">
        <Label htmlFor='date-in'>Date Format In</Label>
        <Input
          id='date-in'
          name='email'
          type='email'
          placeholder='jane@example.com'
        />
      </Box>

      <Box mt="4vh">
        <Label htmlFor='date-out'>Date Fromat Out</Label>
        <Input
          id='date-out'
          name='email'
          type='email'
          placeholder='jane@example.com'
        />
      </Box>
    </Flex>
  </div >)
}

export default DateFormating;
