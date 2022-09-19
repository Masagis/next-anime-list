import { actionTypes } from '../actionTypes'

const initState = {
  isLoading: false,
  message: null,
  listAnime: null,
  pagination: {
    currentPage: 1,
    lastPage: 1,
    count: 0,
    recordPerPage: 10,
  },
  params: {
    page: 1,
    limit: 10,
    by: 'def.created_at',
    sort: 'desc',
    search: '',
    status: '',
  },
}

export const AnimeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIME_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_ANIME_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listAnime: action.payload?.data,
        pagination: {
          currentPage: action.payload?.meta?.current_page || 1,
          lastPage: action.payload?.meta?.last_page || 1,
          count: action.payload?.meta?.total || 0,
          recordPerPage: action.payload?.meta?.per_page || 10,
        },
      }
    case actionTypes.GET_ANIME_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default AnimeReducer
