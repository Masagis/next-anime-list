import axios from 'axios'

import { URL_API } from '../../configs/keys'
import { actionTypes } from '../actionTypes'

export function getListAnime(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_ANIME_LIST_REQUEST })
    return axios({
      method: 'GET',
      url: `${URL_API}/anime`,
      params,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ANIME_LIST_SUCCESS,
          payload: response.data,
          params,
        })
        return response.data
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_ANIME_LIST_FAILED,
          payload: error.response.data.messages,
        })
        throw error
      })
  }
}

export function getListAnimeByID(id) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_ANIME_LIST_ID_REQUEST })
    return axios({
      method: 'GET',
      url: `${URL_API}/anime/${id}`,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ANIME_LIST_ID_SUCCESS,
          payload: response.data,
        })
        return response.data
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_ANIME_LIST_ID_FAILED,
          payload: error.response.data.messages,
        })
        throw error
      })
  }
}

export function getListAnimeRecomendation(id) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_ANIME_RECOMENDATION_REQUEST })
    return axios({
      method: 'GET',
      url: `${URL_API}/anime/${id}/recommendations`,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ANIME_RECOMENDATION_SUCCESS,
          payload: response.data,
        })
        return response.data
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_ANIME_RECOMENDATION_FAILED,
          payload: error.response.data.messages,
        })
        throw error
      })
  }
}
