import { useState } from "react";
import { motion } from "framer-motion";

const TransferData = [
  {
    id: 1,
    username: "john_doe",
    amount: 5000,
    note: "Payment for services",
    date: "2025-02-28 12:30:00",
    status: "Completed"
  },
  {
    id: 2,
    username: "jane_smith",
    amount: 7500,
    note: "Loan repayment",
    date: "2025-02-28 14:45:00",
    status: "Pending"
  },
  {
    id: 3,
    username: "mike_adams",
    amount: 3000,
    note: "Gift transfer",
    date: "2025-02-28 16:00:00",
    status: "Failed"
  },
  {
    id: 4,
    username: "emma_watson",
    amount: 12000,
    note: "Business investment",
    date: "2025-02-28 18:20:00",
    status: "Processing"
  },
  {
    id: 5,
    username: "robert_brown",
    amount: 2500,
    note: "Rent payment",
    date: "2025-02-28 20:10:00",
    status: "Completed"
  }
];
function TransferHistory() {
  const [activeTab, setActiveTab] = useState(1);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? TransferData
      : TransferData.filter((item) => item.status === filter);

  const tabs = [
    { id: 1, label: "Transfered to" },
    { id: 2, label: "Recieved to" }
  ];
  return (
    <>
      <div className="relative">
        <div className="flex bg-white">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 flex-1 px-2 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id ? "text-black" : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <motion.div
            className="absolute -left-0 top-1 h-[calc(100%-8px)] rounded-full border-b-2"
            style={{
              width: `${100 / tabs.length}%`,
              borderImage:
                "linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary), var(--color-primary)) 1",
              borderImageSlice: 1
            }}
            animate={{ x: `${(activeTab - 1) * 100}%` }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        </div>
      </div>
      <div className="mt-4    rounded-lg">
        {activeTab === 1 && (
          <div>
            {filteredData.map((withdraw) => (
              <div key={withdraw.id} className="my-2">
                <div className="bg-primary py-2 rounded-t-xl px-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold me-2 text-black py-0.5 rounded">
                      Withdraw
                    </span>
                    <span>
                      <span
                        className={`font-semibold ${
                          withdraw.status === "Pending"
                            ? "text-yellow-600"
                            : withdraw.status === "Approved"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {withdraw.status}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="border border-secondary border-t-0 rounded-b-xl bg-white p-0">
                  <div className="px-2.5 flex justify-between items-center">
                    <div className="w-full py-2 capitalize">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-dark">username</span>
                        <span className="text-sm text-dark">
                          {withdraw.username}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-dark">amount</span>
                        <span className="text-sm text-dark">
                          ₹{withdraw.amount}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-dark">Created Date</span>
                        <span className="text-sm text-dark">
                          {withdraw.date}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-dark">note</span>
                        <span className="text-sm text-dark">
                          {withdraw.note}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h3 className="text-lg font-semibold">Received Transactions</h3>
            <p className="text-sm text-gray-600">
              List of transfers you have received.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default TransferHistory;
