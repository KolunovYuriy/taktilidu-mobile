import initialState from '../redux/initialState'

export const authReducer = (state = initialState.authReducer, action) => {}

export const isRehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true
    default:
      return state
  }
}
