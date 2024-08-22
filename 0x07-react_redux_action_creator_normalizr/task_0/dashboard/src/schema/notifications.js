import * as data from "../../notifications.json"

export function getAllNotificationsByUser(userId) {
  const result = [];
  for (const key in data) {
    if (data[key].author.id === userId) {
      result.push(data[key].context);
    }
  }
  return result;
}
