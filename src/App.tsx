import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'

import RootNavigator from './navigation/RootNavigator'
import { rootReducer } from './redux'

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
