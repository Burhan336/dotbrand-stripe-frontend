import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Success = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
      <FiCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
      <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
      <p className="text-gray-600">Thank you for your subscription.</p>
    </div>
  </div>
);

export default Success;
