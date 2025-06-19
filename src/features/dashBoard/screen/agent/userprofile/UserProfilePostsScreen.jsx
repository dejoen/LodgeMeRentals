import UserProfilePostsCard from "../../../component/agent/userProfile/UserProfilePostsCard";

import { CircularProgress } from "@mui/material";

import useGetAgentPublishedHouses from "../../../hooks/useGetAgentPublishedHouses";
import useGetUpdatedState from "../../../hooks/useGetUpdatedState";

const UserProfilePostsScreen = () => {
  const { agentState } = useGetUpdatedState();

  const { isLoading, errorMessage, publisedHouses } = useGetAgentPublishedHouses(agentState.data);

  return (
    <div className="w-full font-nunito">
      <p className="m-3">Posted Houses</p>
      <div className=" flex flex-wrap gap-5 place-items-center justify-center w-full max-h-[400px] md:ms-5 overflow-y-auto mb-2">
        {isLoading && <CircularProgress size={100} />}

        {
          !isLoading && !errorMessage && publisedHouses && publisedHouses.length > 0 ? (
            publisedHouses.map((house) => (
              <UserProfilePostsCard
                key={house._id}
                name={house.houseOverview.houseName}
                address={house.houseOverview.houseAddress}
                houseImage={
                  house.mediaUpload
                    ? house.mediaUpload.find((e) => {
                        return e.type === "image";
                      }).url
                    : ""
                }
              />
            ))
          ) : (
            <div> {errorMessage} </div>
          )
          //  alert(JSON.stringify(errorMessage))
        }
      </div>
    </div>
  );
};

export default UserProfilePostsScreen;
