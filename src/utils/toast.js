import React, { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationContext = createContext();

export const useNotification = () => {
  const { showNotification } = useContext(NotificationContext);
  return showNotification;
};

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        onClose={handleNotificationClose}
      >
        {notification && (
          <>
            {notification.type === 'info' && toast.info(notification.message)}
            {notification.type === 'success' && toast.success(notification.message)}
            {notification.type === 'warning' && toast.warn(notification.message)}
            {notification.type === 'error' && toast.error(notification.message)}
            {!notification.type && toast(notification.message)}
          </>
        )}
      </ToastContainer>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
