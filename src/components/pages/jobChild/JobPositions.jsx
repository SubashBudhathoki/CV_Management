import React from "react";
import { Link } from "react-router-dom";
import { JobPosition } from "../../../features/api/JobApi";

const JobPositions = () => {
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
                JobDomainId
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Job Description Url
              </th>
              <th scope="col" className="px-6 py-3">
                JobLevel
              </th>

              <th scope="col" className="px-6 py-3">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {JobPosition.map((item, index) => (
              <tr className="">
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
                <td className="px-6 py-4">{item.JOBDOMAINID}</td>

                <td className="px-6 py-4">{item.NAME}</td>
                <td className="px-6 py-4">
                  <Link
                    to={
                      "https://docs.google.com/document/d/1N2CVdaZb6LcxkTUYPO_GJrhbrW7uyqj8-GWpdYPaDVc/edit"
                    }
                  >
                    {item.JOB_DESCRIPTION_URL}
                  </Link>
                  <br />
                </td>
                <td className="px-6 py-4">{item.JOBLEVEL}</td>
                <td className="px-6 py-4">{item.STATUS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobPositions;
