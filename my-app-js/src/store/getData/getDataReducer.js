import { GET_UNITS, SET_UNITS } from './getDataType'

const initialState = {
  units: {carNumber: '1254dfss'}
}

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNITS: return {
      ...state,
    }
    case SET_UNITS: return {
      ...action.payload,
    }
    default: return state
  }
}

export default unitReducer