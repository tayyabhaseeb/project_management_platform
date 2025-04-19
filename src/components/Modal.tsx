import React from "react";
import { ModalProps } from "../models/Project";

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-[#1e6352] mb-4">{title}</h2>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
