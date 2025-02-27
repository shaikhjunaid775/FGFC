import { useState } from "react";

const withdrawData = [
  {
    id: 1,
    amount: 100000,
    type: "1 month",
    createdDate: "2025-02-18 17:34:33",
    payoutDate: "2025-03-18",
    status: "Pending"
  },
  {
    id: 2,
    amount: 50000,
    type: "3 months",
    createdDate: "2025-01-15 14:20:10",
    payoutDate: "2025-04-15",
    status: "Approved"
  },
  {
    id: 3,
    amount: 75000,
    type: "6 months",
    createdDate: "2024-12-10 10:15:45",
    payoutDate: "2025-06-10",
    status: "Rejected"
  }
];

function WithdrawHistory() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? withdrawData
      : withdrawData.filter((item) => item.status === filter);

  return (
    <div className="p-0">
      <div className="flex gap-2 my-2">
        {["All", "Pending", "Approved", "Rejected"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
              filter === status
                ? "bg-primary text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

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
              <div className="w-full py-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark">
                    Deposit Amount (INR)
                  </span>
                  <span className="text-sm text-dark">
                    ₹{withdraw.amount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark">Type</span>
                  <span className="text-sm text-dark">{withdraw.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark">Created Date</span>
                  <span className="text-sm text-dark">
                    {withdraw.createdDate}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark">Payout Date</span>
                  <span className="text-sm text-dark">
                    {withdraw.payoutDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WithdrawHistory;
