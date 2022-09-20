import React from 'react'

function CardTrailer(props) {
  const { data } = props
  return (
    <div data-testid="card-trailer-anime">
      {data?.trailer?.embed_url === null ? (
        <div className="text-center" data-testid="hidden-trailer-anime" />
      ) : (
        <div
          className="video-responsive mb-3"
          data-testid="unhidden-trailer-anime"
        >
          <iframe
            data-testid="video-trailer-anime"
            width="100%"
            height="480"
            src={`${data?.trailer?.embed_url}`}
            frameBorder="0"
            allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
    </div>
  )
}

export default CardTrailer
