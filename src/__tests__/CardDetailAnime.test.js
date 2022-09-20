/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import CardDetailAnime from '../containers/detail/CardDetailAnime'

describe('Component CardDetailAnime', () => {
  test('should be render the component card detail anime anime by id', () => {
    const data = {
      title_english: 'One Piece',
      title_japanese: 'ONE PIECE',
      type: 'TV',
      duration: '24 min',
      episodes: 12,
      aired: {
        from: '1999-10-20T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 20,
            month: 10,
            year: 1999,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Oct 20, 1999 to ?',
      },
      source: 'Manga',
      status: 'Currently Airing',
      studios: [
        {
          mal_id: 18,
          type: 'anime',
          name: 'Toei Animation',
          url: 'https://myanimelist.net/anime/producer/18/Toei_Animation',
        },
      ],
      producers: [
        {
          mal_id: 169,
          type: 'anime',
          name: 'Fuji TV',
          url: 'https://myanimelist.net/anime/producer/169/Fuji_TV',
        },
        {
          mal_id: 416,
          type: 'anime',
          name: 'TAP',
          url: 'https://myanimelist.net/anime/producer/416/TAP',
        },
      ],
    }

    render(<CardDetailAnime data={data} />)
    expect(screen.getByTestId('card-detail-anime')).toBeInTheDocument()
    expect(screen.getByTestId('title-detail-anime')).toHaveTextContent(
      'ONE PIECE',
    )
    expect(screen.getByTestId('status-detail-anime')).toHaveTextContent(
      'Currently Airing',
    )
    expect(screen.getByTestId('source-detail-anime')).toHaveTextContent('Manga')
    expect(screen.getByTestId('episodes-detail-anime')).toHaveTextContent(12)
    expect(screen.getByTestId('producer-detail-anime')).toHaveTextContent(
      'Fuji TV',
    )
    expect(screen.getByTestId('english-detail-anime')).toHaveTextContent(
      'One Piece',
    )
    expect(screen.getByTestId('type-detail-anime')).toHaveTextContent('TV')
    expect(screen.getByTestId('duration-detail-anime')).toHaveTextContent(
      '24 min',
    )
    expect(screen.getByTestId('studios-detail-anime')).toHaveTextContent(
      'Toei Animation',
    )
    expect(screen.getByTestId('rilis-detail-anime')).toHaveTextContent(
      'Oct 20, 1999 to ?',
    )
  })

  test('snapshoot', () => {
    const data = {
      title_english: 'One Piece',
      title_japanese: 'ONE PIECE',
      type: 'TV',
      duration: '24 min',
      episodes: 12,
      aired: {
        from: '1999-10-20T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 20,
            month: 10,
            year: 1999,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Oct 20, 1999 to ?',
      },
      source: 'Manga',
      status: 'Currently Airing',
      studios: [
        {
          mal_id: 18,
          type: 'anime',
          name: 'Toei Animation',
          url: 'https://myanimelist.net/anime/producer/18/Toei_Animation',
        },
      ],
      producers: [
        {
          mal_id: 169,
          type: 'anime',
          name: 'Fuji TV',
          url: 'https://myanimelist.net/anime/producer/169/Fuji_TV',
        },
        {
          mal_id: 416,
          type: 'anime',
          name: 'TAP',
          url: 'https://myanimelist.net/anime/producer/416/TAP',
        },
      ],
    }

    const renderComponent = render(<CardDetailAnime data={data} />)
    expect(renderComponent).toMatchSnapshot()
  })
})
