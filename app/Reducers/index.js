import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer/';
import {responseReducer} from './ResponseReducer/';

export const rootReducer = combineReducers({
  auth: authReducer,
  response: responseReducer,
});
