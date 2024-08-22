import * as data from "../../notifications.json"
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const result = [];
  for (const key in data) {
    if (data[key].author.id === userId) {
      result.push(data[key].context);
    }
  }
  return result;
}


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});


const notification = new schema.Entity('notifications', {}, {
  author: user,
  context: message,
});

export const normalizedData = normalize(data, notification);
