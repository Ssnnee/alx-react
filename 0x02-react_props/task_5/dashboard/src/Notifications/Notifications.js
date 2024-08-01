import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

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
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

