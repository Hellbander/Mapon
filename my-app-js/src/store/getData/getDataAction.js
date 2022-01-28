import { GET_UNITS, SET_UNITS } from './getDataType'

export const getUnits = (unit = {}) => {
  return {
    type: GET_UNITS,
    payload: unit
  }
}

export const setUnits = (unit = {}) => {
  return {
    type: SET_UNITS,
    payload: unit
  }
}