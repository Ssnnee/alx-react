export const filterTypeSelected = (data) =>  data.get('filter');

export const getNotifications = (data) => data.get('notification')

export const getUnreadNotifications = (data) => {
    const notification = Object.values(getNotifications(data).toJS())
    return notification.filter((not) => {
        not.isRead
    })
}

