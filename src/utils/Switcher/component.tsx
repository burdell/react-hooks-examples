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
  const [currentView, setSelectedView] = useState<Switch>(switches[0])

  const viewShown = (theSwitch: Switch) => currentView === theSwitch
  const handleSwitchClick = (theSwitch: Switch) => setSelectedView(theSwitch)

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
        <View className="view" key={`view-${currentView.name}`}>
          <div>{currentView.component}</div>
        </View>
      </ShownViews>
    </Fragment>
  )
}
