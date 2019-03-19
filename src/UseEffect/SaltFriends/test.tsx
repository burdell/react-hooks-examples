import React from 'react'
import {
  render,
  wait,
  queryByText,
  queryByTestId,
  RenderResult
} from 'react-testing-library'

import { UseEffect as ClassComp } from './class'
import { UseEffect as HookComp } from './hook'
import { resetApi } from './api'

// https://github.com/facebook/react/pull/14853

describe('Class Component', () => {
  beforeEach(() => resetApi)

  it('renders mah salt friends and not salt friends', async () => {
    await renders(render(<ClassComp />))
  })

  it('filters by salt', async () => {
    await filters(render(<ClassComp />))
  })

  it('adds & removes friends', async () => {
    await addsAndRemoves(render(<ClassComp />))
  })
})

describe('Hook Component', () => {
  beforeEach(() => resetApi)

  it('renders mah salt friends and not salt friends', async () => {
    await renders(render(<HookComp />))
  })

  it('filters by salt', async () => {
    await filters(render(<HookComp />))
  })

  it('adds & removes friends', async () => {
    await addsAndRemoves(render(<HookComp />))
  })
})

const renders = async (result: RenderResult) => {
  const { getByTestId } = result
  await wait()

  const friends = getByTestId('friend-list')
  const allUsers = getByTestId('all-user-list')

  expect(queryByText(friends, 'Rusty Shackelford')).not.toBeNull()

  expect(queryByText(allUsers, 'Rusty Shackelford')).not.toBeNull()
  expect(queryByText(allUsers, 'Tom Joad')).not.toBeNull()
  expect(queryByText(allUsers, 'Ivan Karamazov')).not.toBeNull()
}

const filters = async (result: RenderResult) => {
  const { getByTestId } = result

  const dcInput = getByTestId('good-salt') as HTMLInputElement
  const mInput = getByTestId('bad-salt') as HTMLInputElement
  const friends = getByTestId('friend-list')
  const allUsers = getByTestId('all-user-list')

  dcInput.click()
  await wait()

  expect(queryByText(friends, 'Rusty Shackelford')).not.toBeNull()
  expect(queryByText(allUsers, 'Ivan Karamazov')).not.toBeNull()
  expect(queryByText(allUsers, 'Tom Joad')).toBeNull()

  dcInput.click()
  mInput.click()
  await wait()

  expect(queryByText(friends, 'Rusty Shackelford')).toBeNull()
  expect(queryByText(allUsers, 'Ivan Karamazov')).toBeNull()
  expect(queryByText(allUsers, 'Tom Joad')).not.toBeNull()
}

const addsAndRemoves = async (result: RenderResult) => {
  const { getByTestId } = result
  const findTomJoad = (el: HTMLElement) => queryByText(el, 'Tom Joad')

  await wait()

  const friends = getByTestId('friend-list')
  const allUsers = getByTestId('all-user-list')

  expect(findTomJoad(friends)).toBeNull()

  const tomNonFriend = queryByTestId(allUsers, 'change-friend-Tom Joad')
  tomNonFriend!.click()

  await wait()

  expect(findTomJoad(friends)).not.toBeNull()
  expect(findTomJoad(allUsers)).not.toBeNull()

  const tomFriend = queryByTestId(friends, 'change-friend-Tom Joad')
  tomFriend!.click()

  await wait()

  expect(findTomJoad(friends)).toBeNull()
  expect(findTomJoad(allUsers)).not.toBeNull()
}
