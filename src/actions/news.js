import {
  checkStatus,
  parseJSON
} from "./../helpers/http";

export const SET_NEWS = 'SET_NEWS';
export const GET_NEWS_STARTED = 'GET_NEWS_STARTED';
export const GET_NEWS_FAILED = 'GET_NEWS_FAILED';

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    data: news
  }
}

export const getNews = input => dispatch => {
  dispatch({ type: GET_NEWS_STARTED });
  return fetch('http://api.uptiverse.se/api/news', { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
      dispatch(setNews(json));
    }).catch(function(ex) {
      dispatch({ type: GET_NEWS_FAILED });
    });
};
