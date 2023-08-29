import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectedInterviewUser } from "../../features/Candidate/CandidateSlice";

const Candidate = () => {
  const acceptedUsers = useSelector((state) => state.Candidate.acceptedUser);
  console.log(acceptedUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInterviewValue = (user) => {
    console.log(user);
    dispatch(selectedInterviewUser(user));
    navigate("/Interviews");
  };

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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Experience
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {acceptedUsers.map((user, index) => (
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
                <td className="px-6 py-4">{user.id}</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photo}
                    alt=""
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{user.name}</div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.position}</td>
                <td className="px-6 py-4">{user.Experience}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    <div> {user.select}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleInterviewValue(user)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Interview
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Candidate;
