import React from 'react'

function CardDetailAnime(props) {
  const { data } = props
  return (
    <div>
      <div className="card shadow mb-3">
        <div className="card-header text-center">Anime Detail</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>Synonyms</th>
                    <td>{data?.title_japanese}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{data?.status}</td>
                  </tr>
                  <tr>
                    <th>Source</th>
                    <td>{data?.source}</td>
                  </tr>
                  <tr>
                    <th>Total Episode</th>
                    <td>{data?.episodes}</td>
                  </tr>
                  <tr>
                    <th>Producers</th>
                    <td>{data?.producers?.map((val) => `${val?.name}, `)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>English</th>
                    <td>{data?.title_english}</td>
                  </tr>
                  <tr>
                    <th>Tipe</th>
                    <td>{data?.type}</td>
                  </tr>
                  <tr>
                    <th>Durasi</th>
                    <td>{data?.duration}</td>
                  </tr>
                  <tr>
                    <th>Studio</th>
                    <td>{data?.studios?.map((val) => `${val?.name}, `)}</td>
                  </tr>
                  <tr>
                    <th>Rilis</th>
                    <td>{data?.aired?.string}</td>
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
