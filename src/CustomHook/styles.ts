import styled from '@emotion/styled'

export const ChordBoiStyles = styled('div')`
  button {
    font-size: 2.5rem;
  }
`

export const Instructions = styled('div')`
  border: 1px dashed black;
  padding: 1rem;
  width: 40%;
  margin: 3rem auto 0 auto;
`

export const NoteRow = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`
export const Option = styled('div')`
  padding: 0.5rem;
  border: 1px dashed black;
  margin: 0.5rem;
  transition: 0.2s all ease-in-out;
  width: 100px;
  font-size: 3rem;

  ${({ selected }: { selected: boolean }) =>
    selected
      ? `
     background-color: #4e6b66;
     color: white;
     box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
     border: none;
  `
      : ''}

  :hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
`
