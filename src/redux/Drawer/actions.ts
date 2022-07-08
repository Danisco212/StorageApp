import { TOGGLE_DRAWER } from './actionTypes'

export const toggleDrawer = (status: string) => {
  return (dispatch: any) => {
    returnToDispatch(dispatch, TOGGLE_DRAWER, status)
  }
}

const returnToDispatch = (dispatch: any, type: string, payload?: any) => {
  dispatch({
    type: type,
    payload: payload,
  })
}
