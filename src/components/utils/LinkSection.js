import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { pathLink } from "../../features/Adduser/UserSlice";

export const LinkSection = ({ item }) => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(pathname === item.path);
    dispatch(pathLink(pathname));
  }, [pathname, item.path]);

  const handleLinkClick = () => {
    // Toggle the isActive state
    setIsActive(!isActive);
  };

  return (
    <div>
      <Link to={item.path} onClick={handleLinkClick}>
        <div
          className={`flex items-center justify-between py-3 text-white text-lg ${
            isActive ? "bg-red-500" : "hover:bg-red-500"
          } rounded-lg transition-colors duration-900`}
        >
          <div className="flex items-center gap-3">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
          <span>{item.subtitle ? item.downArrow : null}</span>
        </div>
      </Link>
      {isActive && (
        <div className="flex flex-col text-white text-[1rem] gap-5 px-8">
          {item.subtitle?.map((sublink, index) => (
            <Link
              to={sublink.path}
              key={index}
              className="hover:bg-red-500 rounded-md mt-4 h-8"
            >
              <span>{sublink.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
