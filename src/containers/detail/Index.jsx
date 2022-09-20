import React, { useEffect } from 'react'
import { Spinner } from 'reactstrap'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import {
  getListAnimeByID,
  getListAnimeRecomendation,
} from '@actions/anime.action'

import Breadcrumb from '@components/Breadcrumb'
import CardSynopsis from './CardSynopsis'
import CardDetailAnime from './CardDetailAnime'
import CardTrailer from './CardTrailer'
import CardRecomendation from './CardRecomendation'

function Index() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { isLoading, detailAnime, animeRec } = useSelector(
    (state) => state.anime,
  )

  useEffect(() => {
    if (router?.query?.id) {
      dispatch(getListAnimeByID(router?.query?.id))
      dispatch(getListAnimeRecomendation(router?.query?.id))
    }
  }, [router?.query?.id])

  return isLoading ? (
    <div className="text-center mt-5">
      <Spinner color="secondary">Loading...</Spinner>
    </div>
  ) : (
    <div className="bg-white container">
      <div className="mt-5">
        <Breadcrumb />
        <CardSynopsis data={detailAnime} />
        <CardDetailAnime data={detailAnime} />
        <CardTrailer data={detailAnime} />
        <CardRecomendation data={animeRec} />
      </div>
    </div>
  )
}

export default Index
