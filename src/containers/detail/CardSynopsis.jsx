import React from 'react'
import { FaStar } from 'react-icons/fa'

function CardSynopsis(props) {
  const { data } = props
  return (
    <div>
      <div className="card shadow mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={`${data?.images?.jpg?.image_url}`}
                alt="poster-anime"
                className="img-fluid rounded"
              />
              <div className="mt-3">
                <button
                  className="btn btn-outline-light text-dark fw-bold w-100 h-20"
                  type="button"
                  style={{ border: 'none' }}
                >
                  <FaStar style={{ color: '#f58b2b' }} /> {data?.score}{' '}
                  <small className="text-muted">/ {data?.scored_by}</small>
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <h4>{data?.title}</h4>
              <p>{data?.synopsis}</p>
              {data?.genres?.map((item) => (
                <button
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
