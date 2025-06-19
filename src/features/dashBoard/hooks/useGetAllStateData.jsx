import { useState } from "react";
import allStateData from "../../../utils/AllStateData.json";
export default function useGetAllStateData() {
  const [localGovt, setLocalGovt] = useState(() => {
    return allStateData[0].lgas;
  });

  const getAllStateNames = () => {
    return allStateData.map((data) => {
      return data.name;
    });
  };

  const getStateLocalGovtArea = (name) => {
    const result = allStateData.find((data) => {
      return data.name === name;
    }).lgas;

    setLocalGovt(result);
  };

  return { getAllStateNames, localGovt, getStateLocalGovtArea };
}
