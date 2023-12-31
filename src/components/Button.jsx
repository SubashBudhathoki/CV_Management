import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {text}
    </button>
  );
};

export default Button;
