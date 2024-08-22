import {
  LOGIN,
  LOGOUT,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER
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
