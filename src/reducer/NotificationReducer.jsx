/* eslint-disable react-refresh/only-export-components */

export const NotificationInitialState = {
  notifications: [],
  newNotificationCount: 0,
};

const NotificationReducer = (state, action) => {
  switch (action.TYPE) {
    case "Save": {
      return (state = action.payload);
    }

    default:
      return state;
  }
};

export default NotificationReducer;
