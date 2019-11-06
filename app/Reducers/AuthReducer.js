import {USER_SIGN_UP} from '../Constants/actionCreator';
import {FETCH_USERS} from '../Constants/actionCreator';
import {USER_LOGOUT} from '../Constants/actionCreator';
import {USER_LOGIN} from '../Constants/actionCreator';

const INIT_STATE = {
  user: {},
  users: {},
};

function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case USER_SIGN_UP:
      return {...state, user: action.payload};
    case FETCH_USERS:
      return {...state, users: action.payload};
    case USER_LOGIN:
      return {...state, user: action.payload};
    case USER_LOGOUT:
      return state;
    default:
      return state;
      break;
  }
}
export {authReducer};
