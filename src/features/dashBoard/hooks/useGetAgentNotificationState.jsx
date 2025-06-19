import { useEffect, useState } from "react";
import useManageAgentState from "./useManageAgentState";

const useGetAgentNotificationState = () => {
  const { notificationState, notificationDispatcher } = useManageAgentState();

  const [updatedNotification, setUpdatedNotification] = useState([]);

  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    setUpdatedNotification(notificationState.notifications);
    setNotificationCount(notificationState.newNotificationCount);
  }, [notificationState]);

  const updateNotification = (notifications, count) => {
    notificationDispatcher({
      TYPE: "Save",
      payload: { notifications, newNotificationCount: count },
    });
  };

  return { updatedNotification, updateNotification, notificationCount };
};

export default useGetAgentNotificationState;
