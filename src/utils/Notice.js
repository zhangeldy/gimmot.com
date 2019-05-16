import { NotificationManager } from "react-notifications";

export const Notice = {
  info: (...args) => NotificationManager.info(...args),
  success: (...args) => NotificationManager.success(...args),
  error: (...args) => NotificationManager.error(...args),
  warning: (...args) => NotificationManager.warning(...args)
};
