import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Blacklist = () => {
  const blackListed = useSelector((state) => state.Candidate.blackListed);
  console.log(blackListed);
  return (
    <>
      <div className="px-4">
        <table className="w-full text-sm text-left mt-8 border">
          <thead className="text-xs text-gray-700 uppercase shadow-md">
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Technology
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blackListed.map((user, index) => (
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

                <td className="px-6 py-4">{user.fname + " " + user.lname}</td>
                <td className="px-6 py-4">{user.position}</td>
                <td className="px-6 py-4 space-x-4">
                  <Link to={`BlacklistDetail/${user.id}`}>
                    <button className="bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded">
                      Preview
                    </button>
                  </Link>
                  <button className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded">
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

export default Blacklist;
