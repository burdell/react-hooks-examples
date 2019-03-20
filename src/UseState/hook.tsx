import React, { useState } from 'react'

import { UseStateStyles, TextInput } from './styles'

export const UseState = () => {
  const [text, setText] = useState('')
  const [isSelected, setSelected] = useState(false)

  return (
    <UseStateStyles>
      <div>
        <TextInput
          onChange={e => setText(e.target.value)}
          placeholder="Enter some text"
        />
        <label htmlFor="checked-indicator">Click Me</label>
        <input
          id="checked-indicator"
          type="checkbox"
          onChange={e => setSelected(e.target.checked)}
        />
      </div>

      <div>
        <div>{text || 'No text entered'}</div>
        <div data-testid="checked-indicator">
          Checked: {isSelected ? 'Yes' : 'No'}
        </div>
      </div>
    </UseStateStyles>
  )
}
