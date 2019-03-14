import React, { Component, Fragment } from 'react'

interface State {
  text: string
  isSelected: boolean
}

export class UseState extends Component<{}, Readonly<State>> {
  public readonly state: State = {
    text: '',
    isSelected: false
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            onChange={e => this.setState({ text: e.target.value })}
            placeholder="Enter some text"
          />
          <label htmlFor="checked-indicator">Click Me</label>
          <input
            id="checked-indicator"
            type="checkbox"
            onChange={e => this.setState({ isSelected: e.target.checked })}
          />
        </div>
        <div>
          <div>{this.state.text || 'No text entered'}</div>
          <div data-testid="checked-indicator">
            Checked: {this.state.isSelected ? 'Yes' : 'No'}
          </div>
        </div>
      </Fragment>
    )
  }
}
