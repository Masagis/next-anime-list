import React from 'react'
import { debounce } from 'lodash'

import { useDispatch, useSelector } from 'react-redux'

import Search from '@components/Search'
import SelectType from '@components/SelectType'
import SelectStatus from '@components/SelectStatus'

import { getListAnime } from '@actions/anime.action'

function AnimeFilter() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.anime)

  const typeAnime = [
    {
      value: 'all',
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
        <Search handleSearch={handleSearch} />
        <SelectType typeAnime={typeAnime} handleFilter={handleFilter} />
        <SelectStatus statusType={statusType} handleFilter={handleFilter} />
      </div>
    </div>
  )
}

export default AnimeFilter
