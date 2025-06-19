import { useState } from "react";
import BaseURL from "../../../utils/BaseURL";
import useManageAgentState from "./useManageAgentState";

export default function useUpdateAgentProfile() {
  const { agentReducerState, agentReducerDispatcher } = useManageAgentState();

  const [errorMessage, setErrorMessage] = useState();

  const [progressBar, setProgressBar] = useState(false);
  const [updatedProfileSuccessfully, setUpdatedProfileSuccessfully] = useState(false);
  let updateProfileRequest = async (token, data) => {
    setProgressBar(true);
    fetch(`${BaseURL.URL}/update-agent-profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProgressBar(false);
        if (result.status == 200) {
          agentReducerDispatcher({
            TYPE: "Authentication",
            payload: {
              ...agentReducerState,
              isLoggedIn: true,
              data: {
                ...result.user,
                token,
              },
            },
          });
          setUpdatedProfileSuccessfully(true);
          setErrorMessage("no error");
          return;
        }

        setErrorMessage(result.message);
        //setUpdatedProfile(result)
      });
  };
  return {
    updateProfileRequest,
    errorMessage,
    progressBar,
    setUpdatedProfileSuccessfully,
    updatedProfileSuccessfully,
  };
}
