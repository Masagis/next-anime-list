/* eslint-disable no-undef */
import { fireEvent, render } from '@testing-library/react'
import SelectType from '../components/SelectType'

describe('Component SelectType', () => {
  test('should be render the component', () => {
    const typeAnime = [
      {
        value: 'all',
        label: '- All Type-',
      },
      {
        value: 'TV',
        label: 'TV',
      },
      {
        value: 'Movie',
        label: 'Movie',
      },
    ]

    const handleFilter = jest.fn()
    const { container, getByText } = render(
      <SelectType typeAnime={typeAnime} handleFilter={handleFilter} />,
    )

    fireEvent.focus(container.querySelector('input'))
    fireEvent.keyDown(container.querySelector('input'), {
      key: 'ArrowDown',
      code: 40,
    })
    fireEvent.click(getByText('TV'))

    expect(handleFilter).toHaveBeenCalledWith('TV', 'type')
  })

  test('snapshoot', () => {
    const typeAnime = [
      {
        value: 'all',
        label: '- All Type-',
      },
      {
        value: 'TV',
        label: 'TV',
      },
      {
        value: 'Movie',
        label: 'Movie',
      },
    ]
    const handleFilter = jest.fn()
    const renderComponent = render(
      <SelectType typeAnime={typeAnime} handleFilter={handleFilter} />,
    )
    expect(renderComponent).toMatchSnapshot()
  })
})
