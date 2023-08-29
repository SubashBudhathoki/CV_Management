import React from "react";
import { Link, useParams } from "react-router-dom";
import { deleteDomainItems, domainItems } from "../../../features/Job/JobSlice";
import { useDispatch, useSelector } from "react-redux";

const JobDomains = () => {
  const { id } = useParams();
  const Item = useSelector((state) => state.JobDomain.JobDomainItem);
  console.log(Item);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteDomainItems({ id }));
  };
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
                Technology
              </th>
              <th scope="col" className="px-6 py-3">
                JobLevels
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Item.map((item, index) => (
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
                <td className="px-6 py-4">{item.JobDomainId}</td>

                <td className="px-6 py-4">{item.Technology}</td>
                <td className="px-6 py-4">{item.JobLevel}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(item.JobDomainId)}
                    className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
                  >
                    Delete
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

export default JobDomains;
