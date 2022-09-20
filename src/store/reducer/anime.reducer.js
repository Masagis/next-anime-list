import { actionTypes } from '../actionTypes'

const initState = {
  isLoading: false,
  message: null,
  listAnime: [],
  detailAnime: null,
  animeRec: [],
  pagination: {
    currentPage: 1,
    lastPage: 1,
    count: 0,
    recordPerPage: 10,
  },
  params: {
    page: 1,
    limit: 20,
    sort: 'desc',
    q: '',
    type: '',
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
        listAnime: action.payload?.data || [],
        pagination: {
          currentPage: action.payload?.pagination?.current_page || 1,
          lastPage: action.payload?.pagination?.last_visible_page || 1,
          count: action.payload?.pagination?.items?.total || 0,
          recordPerPage: action.payload?.pagination?.items?.per_page || 10,
        },
        params: action?.params,
      }
    case actionTypes.GET_ANIME_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
      }

    case actionTypes.GET_ANIME_LIST_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_ANIME_LIST_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detailAnime: action.payload?.data || null,
      }
    case actionTypes.GET_ANIME_LIST_ID_FAILED:
      return {
        ...state,
        isLoading: false,
      }

    case actionTypes.GET_ANIME_RECOMENDATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_ANIME_RECOMENDATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        animeRec: action.payload?.data || [],
      }
    case actionTypes.GET_ANIME_RECOMENDATION_FAILED:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default AnimeReducer
