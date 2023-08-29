import React, { useEffect } from "react";
import {
  BsThreeDotsVertical,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Skill } from "../utils/Skill";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveAllUser } from "../../features/Candidate/CandidateSlice";
import { detailUser } from "../../features/Adduser/UserSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const allUsers = useSelector((state) => state.User.user);
  const selectedUser = allUsers.find((user) => user.id === parseInt(id));
  console.log(selectedUser);
  const handleAccept = () => {
    navigate("/Candidate");
    dispatch(receiveAllUser(selectedUser));
  };
  useEffect(() => {
    dispatch(detailUser(id));
  }, [dispatch, id]);
  if (!selectedUser) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {selectedUser && (
        <div className="p-7">
          <div className="bg-white shadow-lg">
            <div className="w-full bg-gradient-to-r from-gray-200 to-white h-[10rem] relative ">
              <div className="flex justify-between">
                <div className="">
                  <img
                    src={selectedUser?.photo}
                    alt=""
                    className="w-[8rem] h-[8rem] shadow-lg border-4 border-white object-cover rounded-full absolute -bottom-12 left-5"
                  />
                </div>

                <div className="flex gap-5 absolute right-0 -bottom-12">
                  <BsFacebook size={20} />
                  <BsInstagram size={20} />
                  <BsTwitter size={20} />
                  <BsThreeDotsVertical size={20} />
                </div>
              </div>
            </div>
            <div className="w-full h-[15rem] mt-16 px-5">
              <div className="">
                <h3>
                  {selectedUser?.fname}
                  {selectedUser?.lname}
                </h3>
                <div className="flex">
                  <span>Kathmandu, Nepal</span>
                  <span className="">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      className="w-15 h-8 rounded-full"
                    />
                  </span>
                </div>
                <p>
                  <span>
                    +977-{selectedUser?.phone}
                    <br />
                    {selectedUser?.email} <br />
                    React-JS Intership at AmnilTechnology
                  </span>
                  <br />
                  <span>Full-time</span>
                </p>
              </div>
              <div className="space-x-3">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Message
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Reject
                </button>
                <button
                  onClick={() => handleAccept()}
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font font-semibold py-2 px-4 border rounded"
                >
                  ShortListed
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg mt-8 py-5 px-4 space-y-5">
            <h2 className="text-lg font-semibold">Skill</h2>
            <div className="flex flex-wrap gap-5">
              {Skill.map((item, index) => (
                <button
                  key={index}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white shadow-lg mt-8 py-5 px-4 space-y-4">
            <h2 className="text-lg font-semibold">
              Achivement in Tech Competition
            </h2>
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-6 py-4">1st</td>

                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={selectedUser?.photo}
                      alt=""
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {selectedUser?.name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {selectedUser?.email}
                      </div>
                    </div>
                  </th>

                  <td className="px-6 py-4">Hackathon 2022</td>
                  <td className="px-6 py-4">FrontEnd</td>
                  <td className="px-6 py-4">$10000</td>
                </tr>

                <tr className="">
                  <td className="px-6 py-4">3rd</td>

                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={selectedUser?.photo}
                      alt=""
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {selectedUser?.name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {selectedUser?.email}
                      </div>
                    </div>
                  </th>

                  <td className="px-6 py-4">Google Code Jam</td>
                  <td className="px-6 py-4">FrontEnd</td>
                  <td className="px-6 py-4">$5000</td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4">2nd</td>

                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={selectedUser?.photo}
                      alt=""
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {selectedUser?.name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {selectedUser?.email}
                      </div>
                    </div>
                  </th>

                  <td className="px-6 py-4">Facebook Hacker Cup</td>
                  <td className="px-6 py-4">FrontEnd</td>
                  <td className="px-6 py-4">$8000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
