import React from 'react'

function CardDetailAnime(props) {
  const { data } = props
  return (
    <div>
      <div className="card shadow mb-3" data-testid="card-detail-anime">
        <div className="card-header text-center">Anime Detail</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>Synonyms</th>
                    <td data-testid="title-detail-anime">
                      {data?.title_japanese}
                    </td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td data-testid="status-detail-anime">{data?.status}</td>
                  </tr>
                  <tr>
                    <th>Source</th>
                    <td data-testid="source-detail-anime">{data?.source}</td>
                  </tr>
                  <tr>
                    <th>Total Episode</th>
                    <td data-testid="episodes-detail-anime">
                      {data?.episodes}
                    </td>
                  </tr>
                  <tr>
                    <th>Producers</th>
                    <td data-testid="producer-detail-anime">
                      {data?.producers?.map((val) => `${val?.name}, `)}
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
                    <td data-testid="english-detail-anime">
                      {data?.title_english}
                    </td>
                  </tr>
                  <tr>
                    <th>Tipe</th>
                    <td data-testid="type-detail-anime">{data?.type}</td>
                  </tr>
                  <tr>
                    <th>Durasi</th>
                    <td data-testid="duration-detail-anime">
                      {data?.duration}
                    </td>
                  </tr>
                  <tr>
                    <th>Studio</th>
                    <td data-testid="studios-detail-anime">
                      {data?.studios?.map((val) => `${val?.name}, `)}
                    </td>
                  </tr>
                  <tr>
                    <th>Rilis</th>
                    <td data-testid="rilis-detail-anime">
                      {data?.aired?.string}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailAnime
