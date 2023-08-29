import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addUser,
  deleteAllUser,
  deleteUser,
  updateAllCheckbox,
  updateUserCheckbox,
} from "../features/Adduser/UserSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import {
  receiveAllUser,
  setBlackListedUser,
} from "../features/Candidate/CandidateSlice";
import BlacklistModal from "./BlacklistModal";

const Table = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [open, setOpen] = useState(false);
  const blackListReason = useSelector(
    (state) => state.Candidate.blackListReason
  );
  console.log(blackListReason);
  const userdata = useSelector((state) => state.User.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRowCheck = (e, id) => {
    const { name, checked } = e.target;
    console.log(checked, id, name);
    if (name === "allSelected") {
      const tempUser = userdata.map((user) => {
        return { ...user, isChecked: checked, name };
      });
      console.log(tempUser);
      dispatch(updateUserCheckbox(tempUser));
    } else {
      console.log("trying to select individual item ");
      dispatch(updateUserCheckbox({ id, name, isChecked: checked }));
    }
  };

  const handleDelete = (id) => {
    setShowConfirmation(true);
    setUserToDelete(id);
  };

  const confirmDelete = () => {
    if (userToDelete !== null) {
      dispatch(deleteUser({ id: userToDelete }));
      setUserToDelete(null);
      setShowConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setUserToDelete(null);
    setShowConfirmation(false);
  };
  const handleAllDelete = () => {
    setOpen(false);
    const selectedUsers = userdata.filter((user) => user.isChecked);
    if (selectedUsers.length > 0) {
      dispatch(deleteAllUser({ ids: selectedUsers.map((user) => user.id) }));
    }
  };
  const handleShorList = () => {
    setOpen(false);
    const Shortlisted = userdata.find((user) => user.isChecked);
    console.log(Shortlisted);
    dispatch(receiveAllUser(Shortlisted));
  };
  const handleBlacklist = () => {
    setOpen(false);
    setShowConfirmation(true);
  };
  const ConfirmBlacklist = () => {
    const blackListed = userdata.find((user) => user.isChecked);
    console.log(blackListed);
    dispatch(
      setBlackListedUser({ ...blackListed, blackListReason: blackListReason })
    );
    setShowConfirmation(false);
    navigate("/Blacklist");
  };

  return (
    <>
      {showConfirmation && (
        <Modal cancelDelete={cancelDelete} confirmDelete={confirmDelete} />
      )}

      {showConfirmation && (
        <BlacklistModal
          ConfirmBlacklist={ConfirmBlacklist}
          cancelDelete={cancelDelete}
        />
      )}
      <div className="flex gap-4">
        <div>
          <button
            onClick={() => navigate("/AddApplicant")}
            className="bg-transparent hover:bg-blue-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded flex items-center gap-2"
          >
            <BsFillPlusSquareFill size={20} className="" />
            <span>Add_Applicant</span>
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-transparent hover:bg-blue-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded flex items-center gap-2"
          >
            Status
          </button>
          {open && (
            <div className="absolute top-[3.5rem] left-0 bg-white p-4 w-[13rem] shadow-lg flex flex-col items-start gap-2 divide-y">
              <button
                onClick={() => handleShorList()}
                className="hover:bg-green-500 rounded w-full p-2 text-left"
              >
                ShortList
              </button>
              <button
                onClick={() => handleBlacklist()}
                className="hover:bg-black hover:text-white rounded w-full p-2 text-left"
              >
                Blacklist
              </button>
              <button
                className="hover:bg-red-700 rounded w-full p-2 text-left"
                onClick={() => handleAllDelete()}
              >
                <span className="flex items-center gap-2">DeleteAllUser</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <table className="w-full text-sm text-left mt-8 border">
        <thead className="text-xs text-gray-700 uppercase shadow-md">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4"
                  name="allSelected"
                  onChange={(e) => handleRowCheck(e)}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
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
          {userdata?.map((item, index) => (
            <tr className="" key={index + 1}>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded"
                    name={item.fname}
                    checked={item.isChecked ? true : false}
                    onChange={(e) => {
                      handleRowCheck(e, item.id);
                    }}
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">{item.id}</td>

              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={item.photo}
                  alt=""
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {item.fname}
                    {item.lname}
                  </div>
                  <div className="font-normal text-gray-500">{item.email}</div>
                </div>
              </th>

              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.position}</td>
              <td className="px-6 py-4">{item.Experience}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                  {item.select}
                </div>
              </td>
              <td className="px-2 py-4 space-x-1">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link
                    to={`/Edit/${item.id}`}
                    className="font-medium hover:underline"
                  >
                    <FiEdit />
                  </Link>
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link
                    to={`/Detail/${item.id}`}
                    className="font-medium hover:underline"
                  >
                    <LuView />
                  </Link>
                </button>

                <button
                  className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
