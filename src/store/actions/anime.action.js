import axios from 'axios'

import { URL_API } from '../../configs/keys'
import { actionTypes } from '../actionTypes'

export function getListAnime(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_ANIME_LIST_REQUEST })
    return axios({
      method: 'GET',
      url: `${URL_API}/membershipPackage/select`,
      params,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ANIME_LIST_SUCCESS,
          payload: response.data,
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
