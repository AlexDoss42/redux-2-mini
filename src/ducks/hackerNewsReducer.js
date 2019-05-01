import axios from 'axios'

const REQUEST_ARTICLES = "REQUEST_ARTICLES"

export function requestArticles() {
  const articles = axios.get('/api/hacker-news');
  return {
    type: REQUEST_ARTICLES,
    payload: articles
  }
}

let initialState = {
  loading: false,
  articles: []
}

function hackerNewsReducer(state = initialState, action) {
  switch(action.type) {
    case `${REQUEST_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true
      };
      
    case `${REQUEST_ARTICLES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        articles: action.payload.data
      };

    case `${REQUEST_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }

}

export default hackerNewsReducer