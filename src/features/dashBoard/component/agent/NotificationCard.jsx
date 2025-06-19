const NotificationCard = ({ title, body, time, type, sender }) => {
  return (
    <div className="w-full  p-5 hover:border border-[#BB7655] rounded-md">
      <p className="font-bold">{title}</p>
      <div className="w-full flex flex-col md:flex-row relative mt-2">
        <p>{body}</p>
        <p className="md:absolute text-sm right-0">
          {new Date().toDateString()}{" "}
          {new Date(time).toLocaleTimeString("Africa", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
      <div className="w-full border"></div>
    </div>
  );
};

export default NotificationCard;
