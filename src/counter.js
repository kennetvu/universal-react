import { combineReducers } from 'redux'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter
})

export default rootReducer