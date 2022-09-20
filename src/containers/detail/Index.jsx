import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import {
  getListAnimeByID,
  getListAnimeRecomendation,
} from '@actions/anime.action'

function Index() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { detailAnime, animeRec } = useSelector((state) => state.anime)

  useEffect(() => {
    if (router?.query?.id) {
      dispatch(getListAnimeByID(router?.query?.id))
      dispatch(getListAnimeRecomendation(router?.query?.id))
    }
  }, [router?.query?.id])

  return (
    <div className="bg-white container">
      <div className="card mt-5 mb-3">
        <div className="card-body">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Beranda</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Detail Anime
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="card shadow mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={`${detailAnime?.images?.jpg?.image_url}`}
                alt="poster-anime"
                className="img-fluid rounded"
              />
              <div className="card shadow mt-2">
                <div className="card-body">
                  <p className="fw-bold text-center">
                    Rating {detailAnime?.score}{' '}
                    <small className="text-muted">
                      / {detailAnime?.scored_by}
                    </small>
                  </p>
                  <i className="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <h4>{detailAnime?.title}</h4>
              <p>{detailAnime?.synopsis}</p>
              {detailAnime?.genres?.map((item) => (
                <button className="btn btn-outline-primary me-2" type="button">
                  {item?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow mb-3">
        <div className="card-header text-center">Anime Detail</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>Synonyms</th>
                    <td>{detailAnime?.title_japanese}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{detailAnime?.status}</td>
                  </tr>
                  <tr>
                    <th>Source</th>
                    <td>{detailAnime?.source}</td>
                  </tr>
                  <tr>
                    <th>Total Episode</th>
                    <td>{detailAnime?.episodes}</td>
                  </tr>
                  <tr>
                    <th>Producers</th>
                    <td>
                      {detailAnime?.producers?.map((val) => `${val?.name}, `)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>English</th>
                    <td>{detailAnime?.title_english}</td>
                  </tr>
                  <tr>
                    <th>Tipe</th>
                    <td>{detailAnime?.type}</td>
                  </tr>
                  <tr>
                    <th>Durasi</th>
                    <td>{detailAnime?.duration}</td>
                  </tr>
                  <tr>
                    <th>Studio</th>
                    <td>
                      {detailAnime?.studios?.map((val) => `${val?.name}, `)}
                    </td>
                  </tr>
                  <tr>
                    <th>Rilis</th>
                    <td>{detailAnime?.aired?.string}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="video-responsive mb-3">
        <iframe
          width="100%"
          height="480"
          src={`${detailAnime?.trailer?.embed_url}`}
          frameBorder="0"
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="card mb-5">
        <div className="card-header text-center">Rekomendasi Anime Lainnya</div>
        <div className="card-body">
          <div className="row">
            {animeRec?.map((item) => (
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

export default Index
