/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import AnimeData from '../containers/AnimeData'

describe('Component AnimeDataList', () => {
  test('should be render the component card anime dta list', () => {
    const data = {
      mal_id: 1,
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
        },
      },

      title: 'Cowboy Bebop',
      title_english: 'Cowboy Bebop',
      title_japanese: 'カウボーイビバップ',
      type: 'TV',
      source: 'Original',
      episodes: 26,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '1998-04-03T00:00:00+00:00',
        to: '1999-04-24T00:00:00+00:00',
        prop: {
          from: {
            day: 3,
            month: 4,
            year: 1998,
          },
          to: {
            day: 24,
            month: 4,
            year: 1999,
          },
        },
        string: 'Apr 3, 1998 to Apr 24, 1999',
      },
      duration: '24 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.75,
      scored_by: 859099,
    }

    const handleDetailAnime = jest.fn()

    render(<AnimeData data={data} handleDetailAnime={handleDetailAnime} />)
    expect(screen.getByTestId('card-list-anime')).toBeInTheDocument()
    expect(screen.getByTestId('image-list-anime')).toHaveAttribute(
      'src',
      'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
    )
    expect(screen.getByTestId('title-list-anime')).toHaveTextContent(
      'Cowboy Bebop',
    )
    expect(screen.getByTestId('type-list-anime')).toHaveTextContent('TV')
    expect(screen.getByTestId('rating-list-anime')).toHaveTextContent(8.75)
    expect(screen.getByTestId('rilis-list-anime')).toHaveTextContent(
      'Apr 3, 1998 to Apr 24, 1999',
    )

    fireEvent.click(screen.getByTestId('card-list-anime'))
    expect(handleDetailAnime).toBeCalledTimes(1)
  })

  test('snapshoot', () => {
    const data = {
      mal_id: 1,
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
        },
      },

      title: 'Cowboy Bebop',
      title_english: 'Cowboy Bebop',
      title_japanese: 'カウボーイビバップ',
      type: 'TV',
      source: 'Original',
      episodes: 26,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '1998-04-03T00:00:00+00:00',
        to: '1999-04-24T00:00:00+00:00',
        prop: {
          from: {
            day: 3,
            month: 4,
            year: 1998,
          },
          to: {
            day: 24,
            month: 4,
            year: 1999,
          },
        },
        string: 'Apr 3, 1998 to Apr 24, 1999',
      },
      duration: '24 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.75,
      scored_by: 859099,
    }

    const renderComponent = render(<AnimeData data={data} />)
    expect(renderComponent).toMatchSnapshot()
  })
})
