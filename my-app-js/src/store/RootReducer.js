import { combineReducers } from 'redux'

import unitReducer from './getData/getDataReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  units: unitReducer
})

export default rootReducer