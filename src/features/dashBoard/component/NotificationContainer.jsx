import { useEffect, useRef, useState } from "react";
import useGetUpdatedSocket from "../hooks/useGetUpdateSocket";
import NotificationCard from "./agent/NotificationCard";
import { getNotitifications } from "../service";
import useGetUpdatedState from "../hooks/useGetUpdatedState";
import useGetAgentNotificationState from "../hooks/useGetAgentNotificationState";

export default function NotificationContainer() {
  const { connectedSocket } = useGetUpdatedSocket();
  const { agentState } = useGetUpdatedState();
  const [notifications, setNotifications] = useState([]);

  const { updatedNotification, notificationCount } = useGetAgentNotificationState();

  return (
    <div className=" mt-[30%] md:ml-[22%] md:mt-[10%]">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h2 className="text-xl font-bold">All Notifications</h2>
        <button className="text-gray-500 text-sm font-semibold"></button>
      </div>

      <div className="m-10 h-[500px] overflow-x-auto ">
        {updatedNotification &&
          updatedNotification.length > 0 &&
          updatedNotification.map((notification, i) => (
            <NotificationCard
              key={i}
              title={notification.notificationTitle}
              body={notification.notificationBody}
              time={notification.notificationTime}
              type={notification.notificationType}
              sender={notification.senderId}
            />
          ))}
      </div>
    </div>
  );
}
