import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { Map } from 'immutable';

export function courseReducer(state = [], action) {
  state = Map(state);
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data((course) => {
        return state
          .set('id', course.id)
          .set('name', course.name)
          .set('credit', course.credit);
      });
    case SELECT_COURSE:
      return state.map((course) => {
        if (course.get('id') === action.index) {
          return course.set('isSelected', true);
        } else {
          return course;
        }
      });
    case UNSELECT_COURSE:
      return state.map((course) => {
        if (course.get('id') === action.index) {
          return course.set('isSelected', false);
        } else {
          return course;
        }
      });
    default:
      return state;
  }
}
