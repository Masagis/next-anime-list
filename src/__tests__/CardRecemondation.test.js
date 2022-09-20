/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import CardRecomendation from '../containers/detail/CardRecomendation'

describe('Component CardRecomendation', () => {
  test('should be render the component card recomendation anime by id', () => {
    const data = {
      entry: {
        mal_id: 11061,
        url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
        images: {
          jpg: {
            image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
            small_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013t.jpg?s=1838e905a0aa3542a009fbcf78000701',
            large_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg?s=1838e905a0aa3542a009fbcf78000701',
          },
          webp: {
            image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013.webp?s=1838e905a0aa3542a009fbcf78000701',
            small_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013t.webp?s=1838e905a0aa3542a009fbcf78000701',
            large_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013l.webp?s=1838e905a0aa3542a009fbcf78000701',
          },
        },
        title: 'Hunter x Hunter (2011)',
      },
      url: 'https://myanimelist.net/recommendations/anime/21-11061',
      votes: 65,
    }

    const handleClickDetail = jest.fn()

    render(<CardRecomendation data={data} handleDetail={handleClickDetail} />)
    expect(screen.getByTestId('card-recomendation-anime')).toBeInTheDocument()
    expect(screen.getByTestId('image-recomendation-anime')).toHaveAttribute(
      'src',
      'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
    )
    expect(screen.getByTestId('title-recomendation-anime')).toHaveTextContent(
      'Hunter x Hunter (2011)',
    )

    fireEvent.click(screen.getByTestId('card-recomendation-anime'))
    expect(handleClickDetail).toBeCalledTimes(1)
  })

  test('snapshoot', () => {
    const data = {
      entry: {
        mal_id: 11061,
        url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
        images: {
          jpg: {
            image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
            small_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013t.jpg?s=1838e905a0aa3542a009fbcf78000701',
            large_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg?s=1838e905a0aa3542a009fbcf78000701',
          },
          webp: {
            image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013.webp?s=1838e905a0aa3542a009fbcf78000701',
            small_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013t.webp?s=1838e905a0aa3542a009fbcf78000701',
            large_image_url:
              'https://cdn.myanimelist.net/images/anime/1337/99013l.webp?s=1838e905a0aa3542a009fbcf78000701',
          },
        },
        title: 'Hunter x Hunter (2011)',
      },
      url: 'https://myanimelist.net/recommendations/anime/21-11061',
      votes: 65,
    }

    const renderComponent = render(<CardRecomendation data={data} />)
    expect(renderComponent).toMatchSnapshot()
  })
})
