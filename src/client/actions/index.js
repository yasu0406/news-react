import axios from 'axios';


export const FETCH_NEWS = 'FETCH_NEWS';
export const fetchNews = () => async dispatch => {
    const res = await axios.get('https://newsapi.org/v2/top-headlines?country=ca&apiKey=3e4ec89d9c1d416296b970c689f51920');
    dispatch({
        type: FETCH_NEWS,
        payload: res
    });
}