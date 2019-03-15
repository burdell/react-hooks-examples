import React, { ReactNode, useState, Fragment } from 'react'

import { SwitcherBar, ShownViews, View, ViewName } from './styles'

interface Switch {
  name: string
  component: ReactNode
}

interface Props {
  switches: Switch[]
}

export const Switcher = ({ switches }: Props) => {
  const [currentViews, setSelectedViews] = useState<Switch[]>([switches[0]])

  const viewShown = (theSwitch: Switch) =>
    currentViews.map(view => view.name).includes(theSwitch.name)

  const handleSwitchClick = (theSwitch: Switch) =>
    setSelectedViews(prevState => {
      if (viewShown(theSwitch))
        return prevState.filter(shownView => shownView.name !== theSwitch.name)
      else return [...prevState, theSwitch]
    })

  return (
    <Fragment>
      <SwitcherBar>
        {switches.map(theSwitch => (
          <div key={theSwitch.name}>
            <button
              className={viewShown(theSwitch) ? 'selected' : ''}
              onClick={() => handleSwitchClick(theSwitch)}
            >
              {theSwitch.name}
            </button>
          </div>
        ))}
      </SwitcherBar>
      <ShownViews>
        {currentViews.map(currentView => (
          <View className="view" key={`view-${currentView.name}`}>
            <ViewName>{currentView.name} View</ViewName>
            <div>{currentView.component}</div>
          </View>
        ))}
      </ShownViews>
    </Fragment>
  )
}
