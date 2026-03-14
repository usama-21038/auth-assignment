import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const BillDetails = () => {
    const bill = useLoaderData();
    const [paidBills, setPaidBills] = useState([]);
    if (!bill) return <div>Bill not found</div>;
    const dueDate = new Date(bill["due-date"]).toLocaleDateString();
    const isPaid = paidBills.includes(bill.id);
    const handlePay = () => {
        if (!isPaid) {
            setPaidBills([...paidBills, bill.id]);
            toast("Bill Successfully Paid!");
        }
    };
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
                <div>
                    <button
                        onClick={handlePay}
                        disabled={isPaid}
                        className={`bg-blue-600 text-white py-2 rounded-lg px-5 transition font-semibold ${isPaid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    >
                        {isPaid ? 'Paid' : 'Pay Bill'}
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default BillDetails;