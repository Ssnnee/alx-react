import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,

} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { Map } from "immutable";

const initialState = {
  notifications: [],
  filter: "DEFAULT",
};

export function notificationReducer(state = initialState, action) {
  state = Map(state);
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.notifications).forEach((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normalizedData);
    case MARK_AS_READ:
      return state.setIn(
        ["notifications", action.index, "isRead"],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
}
