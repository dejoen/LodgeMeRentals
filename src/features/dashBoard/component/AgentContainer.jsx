/* eslint-disable react/prop-types */
import AgentHeader from "./AgentHeader";

const AgentContainer = (props) => {
  return (
    <div className="w-full  md:w-[83.5%] h-fit absolute top-0 z-50 ">
      <AgentHeader header={props.header} body={props.body} />
    </div>
  );
};

export default AgentContainer;
