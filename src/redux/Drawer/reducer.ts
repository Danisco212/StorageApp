import { TOGGLE_DRAWER } from './actionTypes'

const initialState = {
  status: 'closed',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      console.log(action.payload)
      return Object.assign({}, state, {
        status: action.payload,
      })
    default:
      return state
  }
}
