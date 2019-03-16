import React from 'react'
import { render } from 'react-testing-library'
import { Switcher } from './component'

describe('Switcher', () => {
  it('switches the view', () => {
    const View1 = () => <div>I'm View 1</div>
    const View2 = () => <div>I'm View 2</div>
    const View3 = () => <div>I'm View 3</div>

    const { getByText, queryByText } = render(
      <Switcher
        switches={[
          { name: 'View 1', component: <View1 /> },
          { name: 'View 2', component: <View2 /> },
          { name: 'View 3', component: <View3 /> }
        ]}
      />
    )

    const view2Button = getByText('View 2')
    const view3Button = getByText('View 3')

    getByText("I'm View 1")
    expect(queryByText("I'm View 2")).toBeNull()
    expect(queryByText("I'm View 3")).toBeNull()

    view2Button.click()

    expect(queryByText("I'm View 1")).toBeNull()
    getByText("I'm View 2")
    expect(queryByText("I'm View 3")).toBeNull()

    view3Button.click()

    expect(queryByText("I'm View 1")).toBeNull()
    expect(queryByText("I'm View 2")).toBeNull()
    getByText("I'm View 3")
  })
})
