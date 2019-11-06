import {
  URL,
  USER_SIGN_UP,
  FETCH_USERS,
  USER_LOGOUT,
  USER_LOGIN,
} from '../Constants/actionCreator';

// since we are sending an object to the backend(the user's form input), we need to pass our action an argument: user
export function userSignUp(user) {
  return function(dispatch) {
    return fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(response => {
        // AsyncStorage.setItem('userId', response.id);
        dispatch({type: USER_SIGN_UP, payload: response});
      });
  };
}

// go to the backend and find the correct state

export function fetchUsers() {
  return function(dispatch) {
    return fetch(`${URL}/users`)
      .then(response => response.json())
      .then(response => {
        dispatch({type: FETCH_USERS, payload: response});
      });
  };
}

export function userLogin(user) {
  return function(dispatch) {
    return dispatch({type: USER_LOGIN, payload: user});
  };
}

export function userLogout(user) {
  return function(dispatch) {
    return dispatch({type: USER_LOGOUT, payload: user});
  };
}

// export function grabInput(input) {
//   return function(dispatch) {
//     return dispatch({type: USER_SIGN_UP, payload: input});
//   };
// }
