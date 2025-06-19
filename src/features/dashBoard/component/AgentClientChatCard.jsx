const AgentClientChatCard = ({ data, index, onClick }) => {
  return (
    <div
      className="w-fit h-fit"
      onClick={() => {
        onClick(data, index);
      }}
    >
      <img
        className="w-[60px] h-[60px] bg-orange-600 rounded-full"
        src={data && data.sender ? data.sender.userProfile.profileImage : "/"}
      />
    </div>
  );
};

export default AgentClientChatCard;
