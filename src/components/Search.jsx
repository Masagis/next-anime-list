import React from 'react'
import { Input } from 'reactstrap'

function Search(props) {
  const { handleSearch } = props
  return (
    <div className="col-md-4 mb-2">
      <Input
        data-testid="search-anime"
        id="search"
        type="search"
        placeholder="Cari..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
