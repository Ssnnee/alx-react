import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";


describe('notificationActionCreators', () => {
  it('should return correct action for markAsRead', () => {
    const result = markAsAread(1);
    expect(result).toEqual({ type: MARK_AS_READ, index: 1 });
  })

  it('should return correct action for setNotificationFilter', () => {
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(result).toEqual(
      { type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters.DEFAULT
      });
  })
})
