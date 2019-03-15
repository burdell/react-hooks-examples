import styled from '@emotion/styled'

export const SwitcherBar = styled('div')`
  display: flex;
  padding: 0.3rem;
  justify-content: center;
  background-color: #738c79;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  button {
    border: 0;
    background: #4e4d4a;
    color: #fff;
    margin: 0 0.1rem;
    cursor: pointer;
    transition: 0.1s all ease-in-out;

    &.selected {
      background: #ecbe13;
      color: #4e4d4a;
    }

    :hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    }

    :focus {
      outline: none;
    }
  }
`

export const ShownViews = styled('div')`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`

export const View = styled('div')`
  margin: 0.5rem;
  padding: 0.3rem;
  box-shadow: 0px 0px 5px 0px rgba(184, 184, 184, 1);
`

export const ViewName = styled('div')`
  text-align: left;
  border-bottom: 1px dashed black;
`
