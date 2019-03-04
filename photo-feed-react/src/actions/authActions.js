import { API_URL } from './apiUrl'
import * as types from './actionTypes'

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}

export const findUserWithToken = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/find_user_with_token', {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`,
          }),
          body: JSON.stringify({token: localStorage.token})
        })
        .then(resp => resp.json())
        .then(userJson => {
          dispatch(authSuccess(userJson, localStorage.token))          
    })
  }
}

export const signup = (user, history) => {
  const newUser = user
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(response => {
        return response.json()})
      .then(jresp => {
        
        if (jresp.id){ //dispatch to authenticate if user was successfully created
            dispatch(authenticate({
              email: newUser.email,
              password: newUser.password},
              history)
            );
        }
        else if (jresp.email || jresp.username) { 
          // this handles if email or password already taken
            fireSignUpAlertMsg(jresp)
        }
      })
      .catch((errors) => {
          debugger
        window.alert("Sorry, something went wrong. Please try again.") 
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (credentials, history) => {
    return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
    })
      .then(res => res.json())
      .then((response) => {
          const token = response.jwt;
          localStorage.setItem('token', token);
          history.push('/')
          window.alert('You are now logged in!')
          return getUser(credentials)
      })
      .then((user) => {
        console.log(user)
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          window.alert("Sorry, something went wrong. Please try logging in again.")
          dispatch(authFailure(errors))
          localStorage.clear()
      })
  }
}

// this getUser is called by authenticate, it is not an action in and of itself currently (because it doesn't return a dispatch call):
export const getUser = (credentials) => {
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: credentials})
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {
        return userJson})
    .catch(error => {
      return error;
    });
}

const fireSignUpAlertMsg = (jresp) => {
    let alertMsg = 'Another account is already using that '
    alertMsg = jresp.email ? alertMsg += 'email' : alertMsg
    alertMsg = (jresp.email && jresp.username) ? alertMsg += ' and ' : alertMsg
    alertMsg = jresp.username ? alertMsg += 'username' : alertMsg
    alertMsg += '.'
    window.alert(alertMsg)
}