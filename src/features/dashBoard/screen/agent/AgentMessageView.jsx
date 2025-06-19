import AgentContainer from "../../component/AgentContainer";
import AgentNavBarDrawer from "../../component/AgentNavBarDrawer";
import MessagesBodyContainer from "../../component/MessagesBodyContainer";

const AgentMessageView = () => {
  return (
    <div className="w-full  h-full overflow-y-auto">
      <AgentContainer header={"Messages"} />
      <MessagesBodyContainer />
      <AgentNavBarDrawer />
    </div>
  );
};

export default AgentMessageView;
