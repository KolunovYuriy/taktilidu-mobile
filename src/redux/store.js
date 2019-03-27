import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'
import logger from 'redux-logger'

const config = {
  key: 'primary',
  storage
}

const rootReducer = persistCombineReducers(config, {
  form,
  reducers
})

let store = compose(applyMiddleware(thunk, logger))(createStore)(rootReducer)

persistStore(store, () => {})

export default store
