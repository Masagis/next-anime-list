/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import Search from '../components/Search'

describe('Component Animeilter', () => {
  test('should be render the component', () => {
    render(<Search />)
    expect(screen.getByTestId('search-anime')).toBeInTheDocument()
  })

  test('should be render the document with initial value props', () => {
    const handleChange = jest.fn()
    render(<Search handleSearch={handleChange} />)
    const inputField = screen.getByTestId('search-anime')
    expect(inputField.value).toBe('')

    fireEvent.change(inputField, { target: { value: 'boruto' } })
    expect(inputField.value).toBe('boruto')
    expect(handleChange).toHaveBeenCalledWith('boruto')
  })

  test('snapshoot', () => {
    const handleChange = jest.fn()
    const renderComponent = render(<Search handleSearch={handleChange} />)
    expect(renderComponent).toMatchSnapshot()
  })
})
