import React from 'react';
import { useLoaderData } from 'react-router';

const BillDetails = () => {
    const bill = useLoaderData();
    if (!bill) return <div>Bill not found</div>;
    const dueDate = new Date(bill["due-date"]).toLocaleDateString();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left Column: Large Organization Logo & Bill Type Icon */}
            <div className="flex flex-col items-center justify-center">
                <img src={bill.icon} alt={bill.organization} className="w-32 h-32 object-contain mb-6" />
                <img src={bill.icon} alt={bill.bill_type} className="w-16 h-16 object-contain absolute bottom-4 right-4" />
            </div>
            {/* Right Column: Bill Details */}
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-2xl font-bold">{bill.organization}</h2>
                <p className="text-lg font-semibold">{bill.bill_type}</p>
                <p><span className="font-medium">Amount:</span> {bill.amount} BDT</p>
                <p><span className="font-medium">Due Date:</span> {dueDate}</p>
                <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Pay Bill</button>
            </div>
        </div>
    );
};

export default BillDetails;