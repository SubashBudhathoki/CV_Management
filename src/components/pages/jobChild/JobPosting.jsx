import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteJobItem } from "../../../features/Job/JobSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const JobPosting = () => {
  const dispatch = useDispatch();
  const Item = useSelector((state) => state.JobDomain.JobPostingItem);
  const handleDelete = (id) => {
    dispatch(deleteJobItem({ id }));
  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <button
            onClick={() => {
              navigate("/Job/JobPosting/AddJob");
            }}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            More JobPosting
          </button>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700">
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
                JobPositionId
              </th>
              <th scope="col" className="px-6 py-3">
                Technology
              </th>
              <th scope="col" className="px-6 py-3">
                No.of Openings
              </th>
              <th scope="col" className="px-6 py-3">
                PublishedOn
              </th>
              <th scope="col" className="px-6 py-3">
                AppFromDate
              </th>
              <th scope="col" className="px-6 py-3">
                AppExpiryDate
              </th>
              <th scope="col" className="px-6 py-3">
                Status
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
                <td className="px-6 py-4">{item.JOBPOSITIONID}</td>

                <td className="px-6 py-4">{item.Technology}</td>
                <td className="px-6 py-4">{item.NUMBER_OF_OPENINGS}</td>
                <td className="px-6 py-4">{item.PUBLISHEDON}</td>
                <td className="px-6 py-4">{item.APPLICATIONFROMDATE}</td>

                <td className="px-6 py-4">{item.APPLICATIONEXPIRYDATE}</td>
                <td className="px-6 py-4">{item.JOBPOSTINGSTATUS}</td>
                <td className="px-6 py-4 flex">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link
                      to={`/Job/JobPosting/JobEdit/${item.JOBPOSITIONID}`}
                      className="font-medium hover:underline"
                    >
                      <FiEdit />
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(item.JOBPOSITIONID)}
                    className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
                  >
                    <RiDeleteBin6Line />
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

export default JobPosting;
