import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer/';
import {responseReducer} from './ResponseReducer/';
import {reducer as formReducer} from 'redux-form';

export const rootReducer = combineReducers({
  auth: authReducer,
  response: responseReducer,
});
