import React from 'react'
import Select from 'react-select'

function SelectType(props) {
  const { handleFilter, typeAnime } = props

  return (
    <div className="col-md-4 mb-2" data-testid="type-anime">
      <Select
        name="filter_type"
        placeholder="- Filter Type -"
        options={typeAnime}
        onChange={(e) => handleFilter(e?.value, 'type')}
      />
    </div>
  )
}

export default SelectType
