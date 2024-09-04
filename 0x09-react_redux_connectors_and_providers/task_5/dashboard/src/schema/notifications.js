import * as data from "../../notifications.json"
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});


const notification = new schema.Entity('notifications', {}, {
  author: user,
  context: message,
});

export const normalizedData = normalize(data, notification);

export function getAllNotificationsByUser(userId) {
  const result = [];
  for (notification in normalizedData.entities.notifications) {
    if (normalizedData.entities.notifications[notification].author === userId) {
      result.push(normalizedData.entities.notifications[notification].context);
    }
  }
  return result;
}


export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}
