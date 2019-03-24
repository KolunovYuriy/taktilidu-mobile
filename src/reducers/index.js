import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { isRehydrated } from './authReducer'

export default combineReducers({
  form,
  isRehydrated
})
