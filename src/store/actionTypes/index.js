import { animeActionType } from './anime.actionType'

export const actionTypes = {
  ...animeActionType,
}

export const receiveSuccess = (typeAction, response) => ({
  type: actionTypes[typeAction],
  payload: response.data,
})

export const receiveError = (type, error) => ({
  type,
  message: error,
})
