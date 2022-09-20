import React from 'react'

function Breadcrumb() {
  return (
    <div>
      <div className="card mb-3">
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
    </div>
  )
}

export default Breadcrumb
