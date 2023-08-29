import React from "react";

const Modal = ({ cancelDelete, confirmDelete }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-white p-12 rounded-lg flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold">Delete Item !</h2>
          </div>
          <div>
            <p>Are you sure you want to delete this user?</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="mr-4 bg-red-700 text-white px-4 py-2 rounded"
              onClick={confirmDelete}
            >
              Confirm
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={cancelDelete}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
