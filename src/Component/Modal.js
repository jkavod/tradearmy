import React from "react";
import { Form } from "../Component";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <Form />
        <button
          onClick={closeModal}
          className="mt-4 ml-10 px-4 py-2 text-white bg-gray-800 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
