import React from "react";
import { Sidebarlink } from "./utils/Sidebarlink";
import { LinkSection } from "./utils/LinkSection";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 min-h-screen bg-black bg-opacity-50 py-5 px-5 bg-[url('https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/static/media/sidebar-3.482940f2.jpg')] bg-no-repeat bg-cover bg-center bg-blend-multiply ">
        <div>
          <img src="https://www.amniltech.com/assets/img/logo.png" alt="" />
          <hr />
        </div>
        <div className="py-8 flex flex-col gap-4">
          {Sidebarlink.map((item, id) => (
            <LinkSection item={item} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
