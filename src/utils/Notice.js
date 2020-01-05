import { store } from 'react-notifications-component';

const duration = 10000;
const setMessage = (type, message) =>
  store.addNotification({
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'bounceInRight'],
    animationOut: ['animated', 'zoomOut'],
    dismiss: {
      duration: duration,
      pauseOnHover: true,
      showIcon: true
    },
    slidingEnter: { duration: 100 },
    slidingExit: { duration: 300 }
  });

export const Notice = {
  info: message => setMessage('info', message),
  success: message => setMessage('success', message),
  error: message => setMessage('danger', message),
  warning: message => setMessage('warning', message)
};

export default Notice;
