import { useState } from "react";

const ListedHousesHeader = () => {
  const [headerState, setHeaderState] = useState({
    active: true,
    denied: false,
    pending: false,
    paused: false,
    draft: false,
    requiresModification: false
  });

  return (
    <div className="w-full font-nunito overflow-x-auto flex gap-1 md:gap-5 md:justify-start p-5 ">
      <div
        className={`${headerState.active &&
          "bg-[#BB7655] text-white"}   rounded-md flex justify-center place-items-center min-w-fit  p-3  md:min-w-[6%] `}
        onClick={() => {
          setHeaderState({
            ...headerState,
            active: true,
            denied: false,
            pending: false,
            paused: false,
            draft: false,
            requiresModification: false
          });
        }}
      >
        <p className="text-center  ">Active</p>
      </div>

      <div
        className={`${headerState.denied &&
          "bg-[#BB7655] text-white"}  rounded-md flex justify-center place-items-center min-w-fit  p-3  md:min-w-[6%]`}
        onClick={() => {
          setHeaderState({
            ...headerState,
            active: false,
            denied: true,
            pending: false,
            paused: false,
            draft: false,
            requiresModification: false
          });
        }}
      >
        <p>Denied</p>
      </div>
      <div
        className={`${headerState.pending &&
          "bg-[#BB7655] text-white"}   rounded-md flex justify-center place-items-center min-w-fit  p-3  md:min-w-[6%]`}
        onClick={() => {
            setHeaderState({
                ...headerState,
                active: false,
                denied: false,
                pending: true,
                paused: false,
                draft: false,
                requiresModification: false
              });
        }}
      >
        <p>Pending</p>
      </div>
      <div
        className={`${headerState.paused &&
          "bg-[#BB7655] text-white"}   rounded-md flex justify-center place-items-center min-w-fit  p-3  md:min-w-[6%] `}
        onClick={() => {
            setHeaderState({
                ...headerState,
                active: false,
                denied: false,
                pending: false,
                paused: true,
                draft: false,
                requiresModification: false
              });
        }}
      >
        <p>Paused</p>
      </div>
      <div
        className={`${headerState.draft &&
          "bg-[#BB7655] text-white"}   rounded-md flex justify-center place-items-center min-w-fit  p-3  md:min-w-[6%]`}
        onClick={() => {
            setHeaderState({
                ...headerState,
                active: false,
                denied: false,
                pending: false,
                paused: false,
                draft: true,
                requiresModification: false
              });
        }}
      >
        <p>Draft</p>
      </div>
      <div
        className={`${headerState.requiresModification &&
          "bg-[#BB7655] text-white"}  rounded-md flex justify-center place-items-center min-w-fit  p-3  md:min-w-[6%] `}
        onClick={() => {
            setHeaderState({
                ...headerState,
                active: false,
                denied: false,
                pending: false,
                paused: false,
                draft: false,
                requiresModification: true
              });
        }}
      >
        <p>Requires Modification</p>
      </div>
    </div>
  );
};

export default ListedHousesHeader;
