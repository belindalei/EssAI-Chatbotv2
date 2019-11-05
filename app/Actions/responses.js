import {FETCH_RESPONSES, URL} from '../Constants/actionCreator';

export function fetchResponses(responses) {
  return function(dispatch) {
    return dispatch({type: FETCH_RESPONSES, payload: responses});
  };
}
