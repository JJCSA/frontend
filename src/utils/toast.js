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
    if (!notification) {
      setNotification({ message, type });
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      >
        {notification && (
          <>
            {notification.type === 'info' &&
              toast.info(notification.message, {
                onClose: handleNotificationClose,
              })}
            {notification.type === 'success' &&
              toast.success(notification.message, {
                onClose: handleNotificationClose,
              })}
            {notification.type === 'warning' &&
              toast.warn(notification.message, {
                onClose: handleNotificationClose,
              })}
            {notification.type === 'error' &&
              toast.error(notification.message, {
                onClose: handleNotificationClose,
              })}
            {!notification.type && toast(notification.message, { onClose: handleNotificationClose })}
          </>
        )}
      </ToastContainer>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
