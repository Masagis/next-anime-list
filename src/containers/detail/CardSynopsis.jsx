import React from 'react'

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
              <div className="card shadow mt-2">
                <div className="card-body">
                  <p className="fw-bold text-center">
                    Rating {data?.score}{' '}
                    <small className="text-muted">/ {data?.scored_by}</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <h4>{data?.title}</h4>
              <p>{data?.synopsis}</p>
              {data?.genres?.map((item) => (
                <button className="btn btn-outline-primary me-2" type="button">
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
