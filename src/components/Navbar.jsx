import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { useSelector } from "react-redux";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  const navigate = useNavigate();
  const path = useSelector((state) => state.User.path);
  const adminDetail = useSelector((state) => state.User.Admin);

  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // });

  const logout = () => {
    googleLogout();
    navigate("/");
    localStorage.clear();
  };
  return (
    <>
      <div className="h-[72px] py-5 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <AiOutlineBars
            className="text-2xl w-8 h-8 rounded-full cursor-pointer "
            onClick={() => setOpenSidebar(!openSidebar)}
          />
          <span className="text-xl">{path}</span>
        </div>
        <div className="flex items-center gap-8 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <AiOutlineSearch className="text-2xl" />
          </div>
          <input
            type="text"
            className="p-2 rounded-lg px-10"
            placeholder="Search.."
          />
          <IoMdNotifications className="text-2xl" />
          <div className="relative">
            <img
              src={`${adminDetail?.picture}`}
              alt=""
              className="w-10 h-10 object-cover border-2 border-white rounded-full cursor-pointer shadow-lg "
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="absolute top-[3.5rem] right-0 bg-white p-4 w-[13rem] shadow-lg flex flex-col items-start gap-2 divide-y">
                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-gray-50 rounded w-full p-2 text-center"
                >
                  {adminDetail?.name}
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-gray-50 rounded w-full p-2 text-left"
                >
                  Profile
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-gray-50 rounded w-full p-2 text-left"
                >
                  Setting
                </button>
                <button
                  className="hover:bg-gray-50 rounded w-full p-2 text-left"
                  onClick={() => logout()}
                >
                  <span className="flex items-center gap-2">
                    Logout <GrLogout />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
