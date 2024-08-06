import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import { NotificationItem } from "./NotificationItem";

export const Notifications = () => {
  return (
    <div className="Notification">
      <button
        style={{ display: 'inline', position: 'absolute', right: '20px' }}
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt='close' style={{ width: '10px', height: '10px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={getLatestNotification()} />
      </ul>
    </div>
  );
}

