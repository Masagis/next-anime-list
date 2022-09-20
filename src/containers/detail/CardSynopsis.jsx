/* eslint-disable react/no-array-index-key */
import React from 'react'
import { FaStar } from 'react-icons/fa'

function CardSynopsis(props) {
  const { data } = props
  return (
    <div>
      <div className="card shadow mb-3" data-testid="card-sinopsis-anime">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  data-testid="image-sinopsis-anime"
                  src={`${data?.images?.jpg?.image_url}`}
                  alt="poster-anime"
                  className="img-fluid rounded"
                />
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-outline-light text-dark fw-bold w-100 h-20"
                  type="button"
                  style={{ border: 'none' }}
                >
                  <div data-testid="score-sinopsis-anime">
                    <FaStar style={{ color: '#f58b2b' }} />
                    {data?.score}
                  </div>
                  <small
                    className="text-muted"
                    data-testid="scoredby-sinopsis-anime"
                  >
                    / {data?.scored_by}
                  </small>
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <h4 data-testid="title-sinopsis-anime">{data?.title}</h4>
              <p data-testid="sinopsis-anime">{data?.synopsis}</p>
              {data?.genres?.map((item, idx) => (
                <button
                  key={idx}
                  data-testid={`genre-${idx}-sinopsis-anime`}
                  className="btn btn-outline-secondary me-2"
                  type="button"
                >
                  {item?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSynopsis
