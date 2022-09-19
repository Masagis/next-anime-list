import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@etchteam/next-pagination'

import { getListAnime } from '@actions/anime.action'

import AnimeFilter from './AnimeFilter'
import AnimeData from './AnimeData'

function Index() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { isLoading, listAnime, pagination } = useSelector(
    (state) => state.anime,
  )

  const params = {
    page: 1,
    limit: 20,
    q: '',
    type: '',
  }

  useEffect(() => {
    if (router?.query?.page || router?.query?.size) {
      dispatch(
        getListAnime({
          page: router?.query?.page,
          limit: router?.query?.size,
          q: '',
          type: '',
        }),
      )
    } else {
      dispatch(getListAnime(params))
    }
  }, [router?.query?.page, router?.query?.size])

  return (
    <div className="bg-white container">
      <div className="my-5">
        <div className="card shadow">
          <div className="card-header">
            Anime List
            <div className="mt-2">
              <AnimeFilter />
            </div>
          </div>

          <div className="card-body">
            {isLoading ? (
              <div className="text-center">
                <Spinner color="secondary">Loading...</Spinner>
              </div>
            ) : (
              <>
                <AnimeData data={listAnime} router={router} />
                <hr />
                <Pagination total={pagination?.count} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
