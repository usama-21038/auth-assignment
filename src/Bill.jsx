import React from "react";
import { useNavigate } from "react-router";

const Bill = ({ bill }) => {
  const { bill_type, icon, organization, amount } = bill;
  const dueDate = new Date(bill["due-date"]).toLocaleDateString();
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/bills/${bill.id}`);
  };

  return (
    <div className="w-11/12 mx-auto">
        <div className="bg-white shadow-lg rounded-xl py-10 px-15  flex flex-col gap-4">

      {/* Icon + Bill Type */}
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={bill_type}
          className="w-12 h-12 object-contain"
        />
        <div>
          <h2 className="text-lg font-semibold capitalize">{bill_type}</h2>
          <p className="text-gray-500 text-sm">{organization}</p>
        </div>
      </div>

      {/* Bill Info */}
      <div className="text-sm space-y-1">
        <p>
          <span className="font-medium">Amount:</span> {amount} BDT
        </p>
        <p>
          <span className="font-medium">Due Date:</span> {dueDate}
        </p>
      </div>

      {/* See Details Button */}
      <button
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={handleDetails}
      >
        See Details
      </button>

    </div>
    </div>
  );
};

export default Bill;