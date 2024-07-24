import React from 'react';
import * as Toast from '@radix-ui/react-toast';
import '@/app/radix.css';

const ToastDemo = ({ open, message, type, onClose }) => {
  const toastStyle = type === 'success' ? 'ToastSuccess' : 'ToastError';

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className={`ToastRoot ${toastStyle}`} open={open} onOpenChange={onClose}>
        <Toast.Title className="ToastTitle">{type === 'success' ? 'Success' : 'Error'}</Toast.Title>
        <Toast.Description className="ToastDescription">{message}</Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Close">
          <button className={`Button small ${type === 'success' ? 'green' : 'red'}`} onClick={onClose}>
            Close
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastDemo;
