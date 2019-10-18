import { getHeadlines } from '../../api';
import * as types from './types' 

export const getHeadlinesAction =  (search) => dispatch =>  {
  dispatch({type: types.FETCH_HEADLINES_LOADING})
  
  getHeadlines(search).then(response => {
    dispatch({type: types.FETCH_HEADLINES_SUCCESS, payload: response.data.articles})
  })
  .catch(err => {
    dispatch({type: types.FETCH_HEADLINES_ERROR, payload: {...err}})
  })

}