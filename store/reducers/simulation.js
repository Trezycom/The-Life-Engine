import actionTypes from '../actionTypes'
import initialState from '../initialState'





export default function simulationReducer (state = initialState.simulation, action) {
  const {
    payload,
    type,
  } = action

  const newState = { ...state }

  switch (type) {
    case actionTypes.START_SIMULATION:
      newState.running = true
      break

    case actionTypes.STOP_SIMULATION:
      newState.running = false
      break

    case actionTypes.UPDATE_BOUNDS:
      newState.bounds = payload.bounds
      break

    case actionTypes.UPDATE_DISH_SIZE:
      newState.dishSize = payload.size
      break

    case actionTypes.UPDATE_EGGS_TO_SPAWN:
      newState.eggsToSpawn = payload.eggsToSpawn
      break

    case actionTypes.ZOOM_IN:
      newState.zoom = state.zoom + 0.10
      newState.canZoomOut = true
      break

    case actionTypes.ZOOM_OUT:
      newState.zoom = state.zoom - 0.10
      if (state.zoom <= 0.3) {
        newState.canZoomOut = false
      }
      break

    default:
      break
  }

  return newState
}
