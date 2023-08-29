import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Template } from "../OfferLetterTemplate/Template";
import { useLocation, useNavigate } from "react-router-dom";
import { ApplicantApi } from "../../features/api/ApplicantApi";
import { setTableData } from "../../features/Template/TemplateSlice";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";

const OfferLetters = () => {
  const displayTableData = useSelector(
    (state) => state.Template.displayTableData
  );
  const location = useLocation();
  console.log(displayTableData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("HiredUser");
  const [displayUser, setDisplayUser] = useState("");

  const [selectedTemplate, setSelectedTemplate] =
    useState("Choose-OfferLetter");
  const [displayTemplate, setDisplayTemplate] = useState("");

  const handleCreate = () => {
    setDisplayUser(selectedUser);

    const selectedUserData = ApplicantApi.find(
      (user) => user.fname + user.lname === selectedUser
    );

    const selectedTemplateObj = Template.find(
      (template) => template.value === selectedTemplate
    );

    setDisplayTemplate(selectedTemplateObj.name);

    if (selectedUserData && selectedTemplateObj) {
      const offerLetterContent = selectedTemplateObj.value
        .replace("{fname}", selectedUserData.fname)
        .replace("{lname}", selectedUserData.lname)
        .replace("{position}", selectedUserData.position);

      dispatch(
        setTableData({
          displayUser: selectedUser,
          displayTemplate: selectedTemplateObj.name,
          content: offerLetterContent,
        })
      );
    }
  };

  const handleTemplate = (event) => {
    const temp = event.target.value;
    setSelectedTemplate(temp);
  };

  const handleUserSelectionChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedUser(selectedUser);
  };

  return (
    <>
      <div className="flex flex-col px-8 py-8 gap-20">
        <div className="flex shadow-lg bg-white px-4 py-8 gap-[14rem]">
          <div className="flex items-center">
            <select
              name="assessment"
              className="h-12 rounded-md border border-b-black"
              value={selectedUser}
              onChange={handleUserSelectionChange}
            >
              <option value="HiredUser">Candidate</option>

              {ApplicantApi.map((user, index) => (
                <option key={index} value={user.fname + user.lname}>
                  {user.fname}
                  {user.lname}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name=""
              className="h-12 rounded-md border border-b-black"
              value={selectedTemplate}
              onChange={(event) => handleTemplate(event)}
            >
              <option value="OfferLetter">Choose-OfferLetter</option>
              {Template.map((template, index) => (
                <option key={index} value={template.value}>
                  {template.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              onClick={() => handleCreate()}
              className="w-44 h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Create
            </button>
          </div>
        </div>
        <div className="">
          <table className="w-full text-sm text-left border">
            <thead className="text-xs text-gray-700 uppercase shadow-lg px-4">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-6">
                  User
                </th>
                <th scope="col" className="">
                  Offer_Letter
                </th>
                <th scope="col" className="">
                  Action
                </th>
                <th scope="col" className="">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {displayTableData.map((tableData, index) => (
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
                  <td className="px-6 py-6">{tableData.displayUser}</td>

                  <td className="">{tableData.displayTemplate}</td>
                  <td className="">
                    <button
                      onClick={() => {
                        navigate("/Review", {
                          state: {
                            content: tableData.content,
                            displayUser: tableData.displayUser,
                            displayTemplate: tableData.displayTemplate,
                          },
                        });
                        console.log(tableData.content);
                      }}
                      className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
                    >
                      Review
                    </button>
                  </td>
                  <td className="">
                    {tableData.status === "emailSent" ? (
                      <BsFillEnvelopeCheckFill color="green" size={30} />
                    ) : (
                      tableData.status || "Pending"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OfferLetters;
