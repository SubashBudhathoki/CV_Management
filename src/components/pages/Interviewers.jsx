import React from "react";
import {
  BsThreeDotsVertical,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { InterviewerApi } from "../../features/api/InterviewerApi";
import { useSelector } from "react-redux";
const Interviewers = () => {
  const navigate = useNavigate();
  const handleAccept = () => {};

  return (
    <>
      <div className="px-6 py-8 mt-4">
        <table className="w-full text-sm text-left border shadow-lg">
          <thead className="text-xs text-gray-700 uppercase border shadow-lg">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Interviewer
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Technology
              </th>
            </tr>
          </thead>
          <tbody>
            {InterviewerApi.map((item, index) => (
              <tr className="" key={index}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">{item.Id}</td>

                <td className="px-6 py-4">{item.Interviewer}</td>
                <td className="px-6 py-4">{item.Email}</td>
                <td className="px-6 py-4">
                  {item.Technology}
                  {/* <button
                  onClick={() => handleDelete(item.JobDomainId)}
                  className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
                >
                  Delete
                </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Interviewers;
