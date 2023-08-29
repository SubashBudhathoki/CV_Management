import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBlackListReason } from "../features/Candidate/CandidateSlice";
import { useEffect } from "react";

const BlacklistModal = ({ ConfirmBlacklist, cancelDelete }) => {
  const [reason, setReason] = useState("");
  const dispatch = useDispatch();
  const handleReason = (e) => {
    setReason(e.target.value);
  };
  useEffect(() => {
    dispatch(setBlackListReason(reason));
  }, [reason]);
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-white p-12 rounded-lg flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold">BlackList User!</h2>
          </div>
          <div>
            <p>Are you sure you want to BlackList this user?</p>
          </div>
          <div className="">
            <label htmlFor="Reason for BlackList">Reason for BlackList ?</label>
            <input
              type="text"
              id="large-input"
              value={reason}
              onChange={(e) => handleReason(e)}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="mr-4 bg-black text-white px-4 py-2 rounded"
              onClick={ConfirmBlacklist}
            >
              Confirm BlackList
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={cancelDelete}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlacklistModal;
