import React, { Component, createRef, RefObject } from 'react';

export class UseRef extends Component<{}, {}> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.inputRef = createRef();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="Type something..." />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }

  handleClick = () => {
    const inputRef = this.inputRef.current;

    if (!inputRef) return;
    inputRef.focus();
    inputRef.select();
  };
}
