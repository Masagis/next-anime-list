import React from 'react'
import { useRouter } from 'next/router'

function CardRecomendation(props) {
  const { data } = props
  const router = useRouter()
  return (
    <div>
      <div className="card mb-5">
        <div className="card-header text-center">Rekomendasi Anime Lainnya</div>
        <div className="card-body">
          <div className="row">
            {data?.map((item) => (
              <div
                aria-hidden
                className="col-md-3"
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  router.push(`/anime/detail/${item?.entry?.mal_id}`)
                }
              >
                <div className="card shadow mb-3">
                  <img
                    src={item?.entry?.images?.jpg?.image_url}
                    alt="banner-anime"
                    className="mb-2 img-fluid rounded"
                  />
                  <p className="text-center">{item?.entry?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRecomendation
