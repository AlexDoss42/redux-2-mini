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

    default:
      return state;
  }

}

export default hackerNewsReducer