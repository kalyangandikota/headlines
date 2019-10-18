import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import Headlines from '../components/Headlines'

const setup = () => {
  const utils = render(<Headlines />)
  const input = utils.getByLabelText('headlines-input')
  return {
    input,
    ...utils,
  }
}

test('It should match the text', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'trump' } })
  expect(input.value).toBe('trump')
})

