import { combineReducers } from 'redux'
import getHeadlinesReducer from './getHeadlinesReducer'

export default combineReducers({
  headlinesContainer: getHeadlinesReducer,
})