import React from 'react'
import { debounce } from 'lodash'
import Select from 'react-select'
import { Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getListAnime } from '@actions/anime.action'

function AnimeFilter() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.anime)

  const typeAnime = [
    {
      value: '',
      label: '- All Type-',
    },
    {
      value: 'TV',
      label: 'TV',
    },
    {
      value: 'Movie',
      label: 'Movie',
    },
    {
      value: 'ova',
      label: 'OVA',
    },
    {
      value: 'special',
      label: 'Special',
    },
    {
      value: 'ona',
      label: 'ONA',
    },
    {
      value: 'music',
      label: 'Music',
    },
  ]

  const statusType = [
    {
      value: '',
      label: '- All Status-',
    },
    {
      value: 'airing',
      label: 'Airing',
    },
    {
      value: 'complete',
      label: 'Complete',
    },
    {
      value: 'upcoming',
      label: 'Upcoming',
    },
  ]

  const handleSearch = debounce((value) => {
    dispatch(
      getListAnime({
        ...data?.params,
        page: 1,
        q: value,
      }),
    )
  }, 500)

  const handleFilter = (value, type) => {
    dispatch(
      getListAnime({
        ...data?.params,
        page: 1,
        [type]: value,
      }),
    )
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mb-2">
          <Input
            id="search"
            type="search"
            placeholder="Cari..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-2">
          <Select
            id="filter_type"
            name="filter_type"
            placeholder="- Filter Type -"
            options={typeAnime}
            onChange={(e) => handleFilter(e?.value, 'type')}
          />
        </div>
        <div className="col-md-3 mb-2">
          <Select
            id="status"
            name="status"
            placeholder="- Filter Status -"
            options={statusType}
            onChange={(e) => handleFilter(e?.value, 'status')}
          />
        </div>
      </div>
    </div>
  )
}

export default AnimeFilter
