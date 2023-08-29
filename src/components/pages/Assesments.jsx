import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Assesments = () => {
  const { id } = useParams();
  const assesmentUser = useSelector((state) => state.Assesmemt.assesmentUser);
  console.log(assesmentUser);
  const selectedUserFromDropdown = useSelector(
    (state) => state.Candidate.selectedUserFromDropdown
  );
  console.log(selectedUserFromDropdown);
  const assessmentCreatedDate = new Date().toLocaleDateString();

  // Parse the assessmentCreatedDate to a Date object
  const createdDate = new Date(assessmentCreatedDate);

  // Calculate the expiry date by adding 2 days
  const expiryDate = new Date(createdDate);
  expiryDate.setDate(createdDate.getDate() + 2);

  // Format the expiry date as a local date string
  const assessmentExpiryDate = expiryDate.toLocaleDateString();

  return (
    <>
      <div className="px-6 py-8 mt-4">
        <table className="w-full text-sm text-left border shadow-lg">
          <thead className="text-xs text-gray-700 uppercase border shadow-lg">
            <tr>
              <th scope="col" className="p-6">
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
                CandidateId
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                AssessmentTestUrl
              </th>
              <th scope="col" className="px-6 py-3">
                CreationDate
              </th>
              <th scope="col" className="px-6 py-3">
                ExpiryDate
              </th>
              <th scope="col" className="px-6 py-3">
                Remarks
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedUserFromDropdown.map((assesmentpeople, index) => (
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
                <td className="px-6 py-4">{assesmentpeople.id}</td>

                <td className="px-6 py-4">{assesmentpeople.position}</td>
                <td className="px-6 py-4">
                  <Link to={"http://form-timer.com/start/84dcafe4"}>
                    http://form-timer.com/start/84dcafe4
                  </Link>
                  <br />
                  {/* <Link>http://form-timer.com/start/9e52ef7a</Link> */}
                </td>
                <td className="px-6 py-4">{assessmentCreatedDate}</td>

                <td className="px-6 py-4">{assessmentExpiryDate}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <select
                      name="assesment"
                      className="h-10 rounded-md border border-b-black"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link
                      to={`/AssesmentUserDetail/${assesmentpeople.id}`}
                      className="font-medium hover:underline"
                    >
                      View
                    </Link>
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

export default Assesments;
