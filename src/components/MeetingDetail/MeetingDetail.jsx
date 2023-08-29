import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedAssesmentUser } from "../../features/Assesment/AssesmentSlice";
import { useState } from "react";
import { selectedInterUser } from "../../features/Calendardata/CalendardataSlice";

const MeetingDetail = () => {
  const navigate = useNavigate();
  const selectedUser = useSelector((state) => state.Candidate.selectedUser);
  const dispatch = useDispatch();
  console.log(selectedUser);
  const calendardata = useSelector((state) => state.calendar.calendardata);
  console.log(calendardata);
  const handleAssesment = () => {
    dispatch(selectedAssesmentUser(calendardata));
    navigate("/Assessments");
  };
  useState(() => {
    dispatch(selectedInterUser(selectedUser));
  }, dispatch);

  const interviewUser = useSelector((state) => state.calendar.interviewUser);
  console.log(interviewUser);
  const combinedData = calendardata.map((item, index) => ({
    ...item,
    ...interviewUser[index],
  }));
  console.log(combinedData);
  const assesmentCreatedDate = new Date().toLocaleDateString();

  return (
    <>
      <div className="flex flex-col gap-4 mt-8">
        {combinedData.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-8 shadow-lg px-2 py-4 bg-white rounded-lg"
          >
            <div className="bg-red-500 h-10 w-2"></div>
            <div>
              <span className="text-sm text-gray-500 font-light">
                Scheduled Time
              </span>
              <h4>
                {item.startTime}- {item.endTime}
              </h4>
            </div>

            <div>
              <span className="text-sm text-gray-500">InterViewType</span>
              <h4>{item?.interviewType}</h4>
            </div>
            <div>
              <span className="text-sm text-gray-500">Candidate</span>
              <h4>{item?.candidate}</h4>
            </div>
            <div>
              <span className="text-sm text-gray-500">Interviewer</span>
              <h4>{item.interviewer}</h4>
            </div>

            <div className="">
              <div>
                <span className="text-sm text-gray-500 font-light">Remark</span>
                <h4>Well Done</h4>
              </div>
              {/* <select
                name="selectedFruit"
                className="h-10 rounded-md border border-b-black"
              >
                <option value="Remarks">Remarks</option>
                <option value="Good">Good</option>
                <option value="Excellent">Excellent</option>
                <option value="NotSatisfied">Not Satisfied</option>
                <option value="Other">Other</option>
              </select> */}
            </div>
            <div className="flex gap-4">
              {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Second Interview
              </button> */}
              <button
                onClick={() => handleAssesment()}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Assesment
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MeetingDetail;
