import { getHeadlines } from '../../api';
import * as types from './types' 

export const getHeadlinesAction =  (search) => dispatch =>  {
  console.log(search)
  dispatch({type: types.FETCH_HEADLINES_LOADING})
  
  getHeadlines(search).then(response => {
    console.log(response.data.articles)
    dispatch({type: types.FETCH_HEADLINES_SUCCESS, payload: response.data.articles})
  })
  .catch(err => {
    dispatch({type: types.FETCH_HEADLINES_ERROR, payload: {...err}})
  })

}