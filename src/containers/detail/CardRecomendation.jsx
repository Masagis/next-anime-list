import React from 'react'

function CardRecomendation(props) {
  const { data, handleDetail } = props

  return (
    <div
      data-testid="card-recomendation-anime"
      aria-hidden
      className="col-md-2"
      style={{ cursor: 'pointer' }}
      onClick={() => handleDetail()}
    >
      <div className="card shadow mb-3">
        <img
          data-testid="image-recomendation-anime"
          src={data?.entry?.images?.jpg?.image_url}
          alt="banner-anime"
          className="mb-2 img-fluid rounded"
        />
        <p className="text-center" data-testid="title-recomendation-anime">
          {data?.entry?.title}
        </p>
      </div>
    </div>
  )
}

export default CardRecomendation
