import { combineReducers } from 'redux'

import drawerReducer from './Drawer/reducer'

export const rootReducer = combineReducers({
  drawer: drawerReducer,
})
