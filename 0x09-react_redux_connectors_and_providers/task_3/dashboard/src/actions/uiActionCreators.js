import {
  LOGIN,
  LOGOUT,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./uiActionTypes";


export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
  }
}

export function boundLogin(email, password) {
  dispatch(login(email, password));
}


export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  }
}

export function loginRequest(email, password) {
  return async function (dispatch) {
    dispatch(login(email, password));
    return fetch('http://localhost:8564/login-success.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  }
}



export const logout = () => {
  return {
    type: LOGOUT
  }
}

export function boundLogout() {
  dispatch(logout());
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
}

export function boundDisplayNotificationDrawer() {
  dispatch(displayNotificationDrawer());
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
}

export function boundHideNotificationDrawer() {
  dispatch(hideNotificationDrawer());
}
