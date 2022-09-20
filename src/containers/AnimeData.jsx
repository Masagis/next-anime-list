import React from 'react'

function AnimeData(props) {
  const { data, handleDetailAnime } = props

  return (
    <div
      data-testid="card-list-anime"
      aria-hidden
      className="col-md-6"
      style={{ cursor: 'pointer' }}
      onClick={() => handleDetailAnime()}
    >
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-3 col-6">
          <img
            data-testid="image-list-anime"
            src={`${data?.images?.jpg?.image_url}`}
            alt="banner-anime"
            className="mb-2 img-fluid rounded"
            width="150px"
            height="150px"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-9 col-6">
          <div>
            <h4 data-testid="title-list-anime">{data?.title}</h4>
            <p data-testid="type-list-anime">
              Type :{' '}
              <span
                className={`badge ${
                  data?.type === 'TV'
                    ? 'bg-warning'
                    : data?.type === 'Movie'
                    ? 'bg-info'
                    : 'bg-secondary'
                }`}
              >
                {data?.type}
              </span>
            </p>
            <p data-testid="rating-list-anime">Rating : {data?.score}</p>
            <p data-testid="rilis-list-anime">
              Released on : {data?.aired?.string}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeData
