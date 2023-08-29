import React from "react";

const Widget = ({ number, title, percent, icon }) => {
  return (
    <>
      <div className="w-64 bg-white shadow-lg px-5 py-5 mt-12 rounded-xl">
        <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700">
          <div className="bg-gradient-to-r from-lime-300 absolute -mt-12 rounded-md hover:-mt-2 transition-all duration-1000">
            <span className="bg-red-700">{icon}</span>
          </div>
          <div className="p-2 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              {title}
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {number}
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">{percent}</strong>
              than last month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
