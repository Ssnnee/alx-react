import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li className={css(type === "default" ? styles.NotificationsDefault : styles.NotificationsUrgent, styles.small)} onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};


const styles = StyleSheet.create({
  NotificationsDefault: {
    color: "blue",
  },

  small: {
    '@media (max-width: 600px)': {
      width: "100%",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 8px",
    }
  },

  NotificationsUrgent: {
    color: "red",
  }
});

export default NotificationItem;
