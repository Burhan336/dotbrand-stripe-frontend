import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const Failed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
        <FaExclamationCircle className="text-red-500 text-6xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold mb-4">Payment Failed</h2>
        <p className="text-gray-600">Something went wrong. Please try again.</p>
        <button
          onClick={() => navigate("/initiate-checkout")}
          className="mt-4 bg-red-500 text-white p-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Failed;
