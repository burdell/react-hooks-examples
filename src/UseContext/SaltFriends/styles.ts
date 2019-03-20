import styled from '@emotion/styled'
import { Theme } from './theme'

export const Container = styled('div')`
  text-align: left;
  width: 600px;
  background-color: ${({ theme }: { theme: Theme }) => theme.background};
  color: ${({ theme }: { theme: Theme }) => theme.secondary};
`

export const PersonList = styled('div')`
  padding: 1rem;
`

export const PersonStyles = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed ${({ theme }: { theme: Theme }) => theme.secondary};
  padding: 0.5rem;
  margin: 0.5rem 0;

  :hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.accent};
  }
`

export const SaltStyles = styled('img')`
  height: 50px;
`

export const Filter = styled('div')`
  display: flex;
  justify-content: space-between;
`
