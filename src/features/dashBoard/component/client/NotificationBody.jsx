const NotificationBody = () => {
  return (
    <div className="font-nunito flex md:items-center md:flex-row flex-col gap-2 mb-3 w-[90%]">
      <img src="/" />
      <div className="">
        <p className="font-bold text-md">Notification content display here</p>
        <p className="text-sm">just now</p>
      </div>
    </div>
  );
};

export default NotificationBody;
