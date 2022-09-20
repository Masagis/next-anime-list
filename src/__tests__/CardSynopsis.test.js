/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import CardSynopsis from '../containers/detail/CardSynopsis'

describe('Component CardSynopsis', () => {
  test('should be render the component card sinopsis anime by id', () => {
    const data = {
      title: 'One Piece',
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'anime',
          name: 'Adventure',
          url: 'https://myanimelist.net/anime/genre/2/Adventure',
        },
        {
          mal_id: 10,
          type: 'anime',
          name: 'Fantasy',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy',
        },
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245l.webp',
        },
      },
      score: 8.67,
      scored_by: 1121335,
      synopsis:
        'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece. [Written by MAL Rewrite]',
    }

    render(<CardSynopsis data={data} />)
    expect(screen.getByTestId('card-sinopsis-anime')).toBeInTheDocument()
    expect(screen.getByTestId('image-sinopsis-anime')).toHaveAttribute(
      'src',
      'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    )
    expect(screen.getByTestId('title-sinopsis-anime')).toHaveTextContent(
      'One Piece',
    )
    expect(screen.getByTestId('score-sinopsis-anime')).toHaveTextContent(8.67)
    expect(screen.getByTestId('scoredby-sinopsis-anime')).toHaveTextContent(
      1121335,
    )
    expect(screen.getByTestId('sinopsis-anime')).toHaveTextContent(
      'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece. [Written by MAL Rewrite]',
    )
    expect(screen.getByTestId('genre-0-sinopsis-anime')).toHaveTextContent(
      'Action',
    )
    expect(screen.getByTestId('genre-1-sinopsis-anime')).toHaveTextContent(
      'Adventure',
    )
    expect(screen.getByTestId('genre-2-sinopsis-anime')).toHaveTextContent(
      'Fantasy',
    )
  })

  test('snapshoot', () => {
    const data = {
      title: 'One Piece',
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'anime',
          name: 'Adventure',
          url: 'https://myanimelist.net/anime/genre/2/Adventure',
        },
        {
          mal_id: 10,
          type: 'anime',
          name: 'Fantasy',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy',
        },
      ],
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/6/73245l.webp',
        },
      },
      score: 8.67,
      scored_by: 1121335,
      synopsis:
        'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece. [Written by MAL Rewrite]',
    }

    const renderComponent = render(<CardSynopsis data={data} />)
    expect(renderComponent).toMatchSnapshot()
  })
})
