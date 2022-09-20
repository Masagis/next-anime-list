import React from 'react'

function AnimeData(props) {
  const { data, router } = props

  return (
    <div>
      {data?.length === 0 ? (
        <div className="text-center">
          <p>Data tidak ditemukan</p>
        </div>
      ) : (
        <div className="row">
          {data?.map((item, idx) => (
            <div
              key={idx.id}
              aria-hidden
              className="col-md-6"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(`/anime/detail/${item?.mal_id}`)}
            >
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-3 col-6">
                  <img
                    src={`${item?.images?.jpg?.image_url}`}
                    alt="banner-anime"
                    className="mb-2 img-fluid rounded"
                    width="150px"
                    height="150px"
                  />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-9 col-6">
                  <div>
                    <h4>{item?.title}</h4>
                    <p>
                      Type :{' '}
                      <span
                        className={`badge ${
                          item?.type === 'TV'
                            ? 'bg-warning'
                            : item?.type === 'Movie'
                            ? 'bg-info'
                            : 'bg-secondary'
                        }`}
                      >
                        {item?.type}
                      </span>
                    </p>
                    <p>Rating : {item?.score}</p>
                    <p>Released on : {item?.aired?.string}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AnimeData
