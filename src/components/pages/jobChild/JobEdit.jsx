import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJobItem } from "../../../features/Job/JobSlice";

const JobEdit = () => {
  const allJobItem = useSelector((state) => state.JobDomain.JobPostingItem);
  console.log(allJobItem);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const existing = allJobItem?.filter((item) => item.JOBPOSITIONID == id);
  console.log(existing);
  const {
    JOBPOSITIONID,
    Technology,
    NUMBER_OF_OPENINGS,
    PUBLISHEDON,
    APPLICATIONFROMDATE,
    APPLICATIONEXPIRYDATE,
    JOBPOSTINGSTATUS,
  } = existing[0];
  const navigate = useNavigate();

  const [jobPositionId, setJobPositionId] = useState(JOBPOSITIONID);
  const [technology, setTechnology] = useState(Technology);
  const [numberOfOpenings, setNumberOfOpenings] = useState(NUMBER_OF_OPENINGS);
  const [publishedOn, setPublishedOn] = useState(PUBLISHEDON);
  const [applicationFromDate, setApplicationFromDate] =
    useState(APPLICATIONFROMDATE);
  const [applicationExpiryDate, setApplicationExpiryDate] = useState(
    APPLICATIONEXPIRYDATE
  );
  const [jobPostingStatus, setJobPostingStatus] = useState(JOBPOSTINGSTATUS);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editJobItem({
        id: jobPositionId,
        Technology: technology,
        NUMBER_OF_OPENINGS: numberOfOpenings,
        PUBLISHEDON: publishedOn,
        APPLICATIONFROMDATE: applicationFromDate,
        APPLICATIONEXPIRYDATE: applicationExpiryDate,
        JOBPOSTINGSTATUS: jobPostingStatus,
      })
    );
    navigate("/Job/JobPosting");
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex py-5 px-1 w-full gap-4"
      >
        <div className="w-[60%] flex flex-col gap-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="JOBPOSITIONID"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={jobPositionId}
                onChange={(e) => setJobPositionId(e.target.value)}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                JOBPOSITIONID
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Technology"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Technology
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="NUMBER_OF_OPENINGS"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={numberOfOpenings}
                onChange={(e) => setNumberOfOpenings(e.target.value)}
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                NUMBER OF OPENINGS
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="PUBLISHEDON"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={publishedOn}
                onChange={(e) => setPublishedOn(e.target.value)}
                required
              />
              <label
                htmlFor="floating_city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                PUBLISHEDON
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="APPLICATIONFROMDATE"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={applicationFromDate}
                onChange={(e) => setApplicationFromDate(e.target.value)}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                APPLICATIONFROMDATE
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="APPLICATIONEXPIRYDATE"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={applicationExpiryDate}
                onChange={(e) => setApplicationExpiryDate(e.target.value)}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                APPLICATIONEXPIRYDATE
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              JOBPOSTINGSTATUS
            </label>
            <select
              name="JOBPOSTINGSTATUS"
              value={jobPostingStatus}
              onChange={(e) => setJobPostingStatus(e.target.value)}
              className="block w-full px-4 py-3 text-base rounded-lg text-gray-900 bg-transparentborder-0 border-b-2 border-gray-300 dark:border-gray-600"
            >
              <option value="IsActive">IsActive</option>
              <option value="NonActive">NonActive</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-44 h-12 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default JobEdit;
