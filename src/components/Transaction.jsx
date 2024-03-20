import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const Transaction = () => {
  const transactions = [
    { type: 'Paypal', description: 'Send money', amount: '+$82.6 USD' },
    { type: 'Wallet', description: "Mac'D", amount: '+$270.69 USD' },
    { type: 'Transfer', description: 'Refund', amount: '+$637.91 USD' },
    { type: 'Credit Card', description: 'Ordered Food', amount: '-$838.71 USD' },
    { type: 'Wallet', description: 'Starbucks', amount: '+$203.33 USD' },
    { type: 'Mastercard', description: 'Ordered Food', amount: '-$92.45 USD' },
  ];

  return (
    <div className="p-4 transaction-body shadow-lg rounded-md">
      <div className='flex mt-6'>
        <h2 className="text-2xl font-semibold mb-10">Transactions</h2>
        <BsThreeDotsVertical className='text-xl transaction-dots' />
      </div>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-5 flex justify-between items-center">
            <div className="flex items-center">
              <span
                className={`w-8 h-8 rounded-md mr-2 ${
                  transaction.amount.includes('+') ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></span>
              <div>
                <p className="text-xs text-gray-400">{transaction.type}</p>
                <p className="transaction-desc font-bold text-gray-600">{transaction.description}</p>
              </div>
            </div>
            <span
              className={
                transaction.amount.includes('+')
                  ? 'text-green-500'
                  : 'text-red-500'
              }
            >
              {transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transaction;


