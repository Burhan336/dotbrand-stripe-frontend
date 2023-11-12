import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrescriptionBottle,
  faUserMd,
  faClinicMedical,
  faMobileAlt,
  faComments,
  faShieldVirus,
  faCogs,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const ProductFeatures: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Product Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1: Medication Management */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faPrescriptionBottle} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Medication Management
            </h3>
            <p className="text-gray-600">
              Efficiently manage pharmacy catalog, categories, and products.
            </p>
          </div>

          {/* Feature 2: Healthcare Professionals */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faUserMd} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              User Hierarchy Management
            </h3>
            <p className="text-gray-600">
              Implement a multi-level admin hierarchy for efficient store
              management.
            </p>
          </div>

          {/* Feature 3: Clinical Integration */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faClinicMedical} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clinical Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrate with clinical systems for improved patient
              care.
            </p>
          </div>

          {/* Feature 4: Mobile Access */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
            <p className="text-gray-600">
              Access the application on mobile devices for convenience and
              flexibility.
            </p>
          </div>

          {/* Feature 5: Secure Messaging */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Communication</h3>
            <p className="text-gray-600">
              Facilitate secure communication between users and admins.
            </p>
          </div>

          {/* Feature 6: Data Security */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faShieldVirus} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p className="text-gray-600">
              Ensure high-level data security and compliance standards.
            </p>
          </div>

          {/* Feature 7: Automation */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Task Automation</h3>
            <p className="text-gray-600">
              Implement automation for repetitive tasks, saving time and
              reducing errors.
            </p>
          </div>

          {/* Feature 8: Appointment Scheduling */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Appointment Scheduling
            </h3>
            <p className="text-gray-600">
              Allow users to schedule appointments and manage health online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
