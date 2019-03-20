import React from 'react'
import styled from '@emotion/styled'

interface Props {
  level: number
  charging: boolean
}

const BatterStyles = styled('div')`
  padding: 100px;
`

const Indicator = styled('div')`
  width: 150px;
  height: 400px;
  border-radius: 5px;
  background-color: rgb(216, 216, 216, 0.5);
  display: flex;
  align-items: flex-end;
  position: relative;
`

const ChargeLevel = styled('div')`
  height: ${(props: { level: number }) => `${props.level * 100}%`};
  background-color: #67ff2b;
  flex: 1;
`

const TheNub = styled('div')`
  border-bottom: 1px solid transparent !important;
  width: 100px;
  height: 25px;
  margin: 0 auto;
  background-color: ${(props: { chargeFull: boolean }) =>
    props.chargeFull ? '#67ff2b' : `rgb(216, 216, 216, 0.5)`};
`

const ChargingIndicator = styled('img')`
  position: absolute;
  height: 200px;
  top: 85px;
  right: -65px;
`

const Percentage = styled('div')`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 3%;
`

export const Battery = ({ level, charging }: Props) => (
  <BatterStyles>
    <TheNub chargeFull={level === 1} />
    <Indicator>
      {charging && (
        <ChargingIndicator src="https://img.pngio.com/lightning-bolt-png-lightning-bolt-png-560_397.png" />
      )}
      <Percentage>{Math.round(level * 100)}%</Percentage>
      <ChargeLevel level={level} />
    </Indicator>
  </BatterStyles>
)
