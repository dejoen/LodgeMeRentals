import useGetUpdatedState from "../../../hooks/useGetUpdatedState";


const UserProfileAboutScreen = () => {
 
  const { agentState} = useGetUpdatedState()
  
    return (
        <div className="w-full pe-10 ">
        <div className="w-full   ">
        

          <div />
        </div>
        <div className="m-5 w-full justify-center leading-[30px]">
        {
          (agentState.data.userProfile.about) ?  agentState.data.userProfile.about : 
          ` A Profile description of agent goes here, and should not be morethan 70 Characters A Profile description of agent goes here, and
              should not be more than 70 Characters A Profile description of agent
          goes here, and should not be more than 70 Characters A Profile
          description of agent goes here, and should not be more than 70
          Characters A Profile description of agent goes here, and should not
          be more than 70 Characters A Profile description of agent goes here,
          and should not be more than 70 Characters A Profile description of
          agent goes here, and should not be more than 70 Characters A Profile
          description of agent goes here, and should not be more than 70
          Characters A Profile description of agent goes here, and should not
          be more than 70 Characters A Profile description of agent goes here,
          and should not be more than 70 Characters A Profile description of
          agent goes here, and should not be more than 70 Characters A Profile
          description of agent goes here, and should not be more than 70
          Characters A Profile description of agent goes here, and should not
          be more than 70 Characters A Profile description of agent goes here,
          and should not be more than 70 Characters A Profile description of
          agent goes here, and should not be more than 70 Characters`
        }
        </div>

        
      </div>
    );
}


export default  UserProfileAboutScreen