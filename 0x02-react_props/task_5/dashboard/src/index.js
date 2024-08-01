import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App/App";
import { Notifications } from "./Notifications/Notifications";

const rootApp = ReactDOM.createRoot(document.getElementById('root'));
rootApp.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
