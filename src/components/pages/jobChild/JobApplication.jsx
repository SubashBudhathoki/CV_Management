import React from "react";
import { Link, useParams } from "react-router-dom";

const JobApplication = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
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
                JobPostingId
              </th>
              <th scope="col" className="px-6 py-3">
                Technology
              </th>
              <th scope="col" className="px-6 py-3">
                ApplicantId
              </th>

              <th scope="col" className="px-6 py-3">
                ApplicationDate
              </th>
              <th scope="col" className="px-6 py-3">
                NegotiatedSalary
              </th>
              <th scope="col" className="px-6 py-3">
                JobApplicationStatus
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">1</td>

              <td className="px-6 py-4">React Js</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">
                <input type="date" />
              </td>
              <td className="px-6 py-4">20K</td>
              <td className="px-6 py-4">
                <select name="Joblevels">
                  <option value="Applied">Applied</option>
                  <option value="InterviewScheduled">InterviewScheduled</option>
                  <option value="Rejected">Rejected</option>
                  <option value="OfferLetterSent">OfferLetterSent</option>
                  <option value="Hired">Hired</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobApplication;
