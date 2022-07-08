import React from 'react'
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '.'
import { BrowserRouter } from 'react-router-dom';

test('click', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
  const [text] = screen.getAllByTestId('element')
  expect(document.body).toHaveFocus()
  userEvent.tab()
  expect(text).toHaveFocus()
  userEvent.tab()
})