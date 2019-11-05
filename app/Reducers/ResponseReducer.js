import {FETCH_RESPONSES} from '../Constants/actionCreator';

const INIT_STATE = {
  responses: [],
};

export function responseReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_RESPONSES:
      return {...state, responses: action.payload};
    default:
      return state;
      break;
  }
}
