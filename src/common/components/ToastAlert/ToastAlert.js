import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useApp } from '../../../context/AppContext';

export const ToastAlert = () => {
  const { toast, closeToast } = useApp();

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={3500}
      onClose={closeToast}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ top: '64px !important' }}
    >
      <Alert
        onClose={closeToast}
        severity={toast.severity}
        variant="filled"
        sx={{
          width: '100%',
          borderRadius: 3,
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          backgroundColor:
            toast.severity === 'success'
              ? '#10B981'
              : toast.severity === 'error'
              ? '#EF4444'
              : toast.severity === 'info'
              ? '#0F243E'
              : '#D4A017',
          color: '#FFFFFF',
          '& .MuiAlert-icon': {
            color: '#FFFFFF',
          },
        }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastAlert;
