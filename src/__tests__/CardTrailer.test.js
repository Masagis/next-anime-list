/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import CardTrailer from '../containers/detail/CardTrailer'

describe('Component CardTrailer', () => {
  test('should be render the component card recomendation anime by id', () => {
    const data = {
      trailer: {
        youtube_id: 'l_98K4_6UQ0',
        url: 'https://www.youtube.com/watch?v=l_98K4_6UQ0',
        embed_url:
          'https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/l_98K4_6UQ0/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/maxresdefault.jpg',
        },
      },
    }

    render(<CardTrailer data={data} />)
    expect(screen.getByTestId('card-trailer-anime')).toBeInTheDocument()
    expect(screen.getByTestId('video-trailer-anime')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1',
    )
  })

  test('should be not render the component card trailer anime by id', () => {
    const data = {
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
    }

    render(<CardTrailer data={data} />)
    expect(screen.queryByTestId('hidden-trailer-anime')).not.toBeNull()
    expect(screen.queryByTestId('unhidden-trailer-anime')).toBeNull()
  })

  test('snapshoot', () => {
    const data = {
      trailer: {
        youtube_id: 'l_98K4_6UQ0',
        url: 'https://www.youtube.com/watch?v=l_98K4_6UQ0',
        embed_url:
          'https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/l_98K4_6UQ0/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/l_98K4_6UQ0/maxresdefault.jpg',
        },
      },
    }

    const renderComponent = render(<CardTrailer data={data} />)
    expect(renderComponent).toMatchSnapshot()
  })
})
