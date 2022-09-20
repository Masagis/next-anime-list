import React from 'react'
import Select from 'react-select'

function SelectStatus(props) {
  const { handleFilter, statusType } = props

  return (
    <div className="col-md-4 mb-2">
      <Select
        data-testid="type-status-anime"
        name="status"
        placeholder="- Filter Status -"
        options={statusType}
        onChange={(e) => handleFilter(e?.value, 'status')}
      />
    </div>
  )
}

export default SelectStatus
