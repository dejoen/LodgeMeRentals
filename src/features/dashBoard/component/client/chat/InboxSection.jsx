const InboxSection = ({ userName, message, numberOfMessages }) => {
  return (
    <div className="bg-[#EADCB7] h-[60px] flex place-items-center gap-3">
      <img
        className="ms-2 bg-orange-400 w-[26px] h-[28px] rounded-full"
        src="/"
      />

      <div className="w-[70%] ">
        <p>
          {userName}
        </p>
        <p className="max-w-[200px] overflow-hidden text-nowrap text-ellipsis">
          {message}
        </p>
      </div>
      <p className="bg-[#BB7655] rounded-full w-[25px] h-[25px] text-center text-white">
        {numberOfMessages}
      </p>
    </div>
  );
};

InboxSection.propTypes = {
  userName: String,
  numberOfMessages: String,
  message: String
};
export default InboxSection;
