import React from 'react'

function CardTrailer(props) {
  const { data } = props
  return (
    <div>
      {data?.trailer?.embed_url === null ? (
        <div className="text-center" />
      ) : (
        <div className="video-responsive mb-3">
          <iframe
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
