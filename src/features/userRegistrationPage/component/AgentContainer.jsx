/* eslint-disable react/prop-types */
import AgentHeader from "./AgentHeader";


const AgentContainer =(props) =>{
    return (
   <div className="w-full sticky top-0">
<AgentHeader header={props.header} body={props.body}/>
   </div>

    );
}

export default AgentContainer