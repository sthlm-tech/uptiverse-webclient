import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_NEWS = 'SET_NEWS';
export const GET_NEWS_STARTED = 'GET_NEWS_STARTED';
export const GET_NEWS_FAILED = 'GET_NEWS_FAILED';
export const SAVE_NEWS_STARTED = 'SAVE_NEWS_STARTED';
export const SAVE_NEWS_FAILED = 'SAVE_NEWS_FAILED';


export const setNews = (news) => {
  return {
    type: SET_NEWS,
    data: news
  }
}

export const getNews = input => dispatch => {
  dispatch({ type: GET_NEWS_STARTED });
  return fetch('https://api.uptiverse.se/api/news', { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setNews(json));
    }).catch(function(ex) {
      dispatch({ type: GET_NEWS_FAILED });
    });
};

export const saveNews = input => dispatch => {
  dispatch({ type: SAVE_NEWS_STARTED });
  let body = JSON.stringify({ news: input.data });
  return fetch('https://api.uptiverse.se/api/news/create', {
      credentials: 'include',
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch(function(ex) {
      dispatch({ type: SAVE_NEWS_FAILED });
    });

}
