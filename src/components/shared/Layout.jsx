import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
      <div className="flex bg-[#fafafa]">
        {openSidebar && (
          <div>
            <Sidebar />
          </div>
        )}
        <div className="w-full">
          <div className="">
            <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <hr />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
