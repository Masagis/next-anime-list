/* eslint-disable no-undef */
import { fireEvent, render } from '@testing-library/react'
import SelectStatus from '../components/SelectStatus'

describe('Component SelectStatus', () => {
  test('should be render the component', () => {
    const statusType = [
      {
        value: '',
        label: '- All Status-',
      },
      {
        value: 'airing',
        label: 'Airing',
      },
      {
        value: 'complete',
        label: 'Complete',
      },
      {
        value: 'upcoming',
        label: 'Upcoming',
      },
    ]

    const handleFilter = jest.fn()
    const { container, getByText } = render(
      <SelectStatus statusType={statusType} handleFilter={handleFilter} />,
    )

    fireEvent.focus(container.querySelector('input'))
    fireEvent.keyDown(container.querySelector('input'), {
      key: 'ArrowDown',
      code: 40,
    })
    fireEvent.click(getByText('Complete'))

    expect(handleFilter).toHaveBeenCalledWith('complete', 'status')
  })

  test('snapshoot', () => {
    const statusType = [
      {
        value: '',
        label: '- All Status-',
      },
      {
        value: 'airing',
        label: 'Airing',
      },
      {
        value: 'complete',
        label: 'Complete',
      },
      {
        value: 'upcoming',
        label: 'Upcoming',
      },
    ]
    const handleFilter = jest.fn()
    const renderComponent = render(
      <SelectStatus statusType={statusType} handleFilter={handleFilter} />,
    )
    expect(renderComponent).toMatchSnapshot()
  })
})
