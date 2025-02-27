import { useState } from "react";
import { motion } from "framer-motion";
import {toast, Toaster} from "react-hot-toast";

function Withdraw() {
  const [activeTab, setActiveTab] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [withdrawType, setWithdrawType] = useState(null);

  const tabs = [
    { id: 1, label: "1st - 10th Slab" },
    { id: 2, label: "11th - 20th Slab" },
    { id: 3, label: "21st - 30th Slab" }
  ];

  const slabData = {
    1: [
      { amount: 800000.0, depositDate: "2024-12-10 20:59:02" },
      { amount: 600000.0, depositDate: "2024-12-05 18:30:45" },
      { amount: 750000.0, depositDate: "2024-12-01 12:15:20" }
    ],
    2: [{ amount: 500000.0, depositDate: "2024-11-20 15:45:30" }],
    3: [{ amount: 300000.0, depositDate: "2024-10-05 10:30:15" }]
  };

  const openModal = (type) => {
    setWithdrawType(type);
    setShowModal(true);
  };

  const confirmWithdraw = () => {
    console.log(`${withdrawType} withdrawal confirmed`);
    setShowModal(false);
    toast.success("Withdraw Succefully");
    toast.error("Failed to Withdraw");
  };

  return (
    <>
    <Toaster />
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
      <div>
        {Array.isArray(slabData[activeTab]) ? (
          slabData[activeTab].map((slab, index) => (
            <div key={index} className="px-0 py-3">
              <div className="bg-[#FFFCF2] p-2 border border-primary mb-3 rounded-2xl px-2.5 pb-3 relative">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-end">
                    <span className="text-[8px] text-dark">Deposit Date: {slab.depositDate}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="bg-[#ffffff] border border-primary rounded-lg p-1">
                      <h4 className="text-xs font-normal text-center">Investment Amount</h4>
                      <p className="text-xl font-bold text-black leading-tight text-center mt-2">{slab.amount}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => openModal("instant")}
                      className="px-3 py-2 text-[10px] font-medium text-gray-900 bg-[#ffcc00] rounded-full text-center flex gap-2 justify-center w-full"
                    >
                      <span>Withdraw Instant</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => openModal("principal")}
                      className="px-3 py-2 text-[10px] font-medium text-gray-900 bg-[#ffcc00] rounded-full text-center flex gap-2 justify-center w-full"
                    >
                      <span>Withdraw Principal</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span>USDT</span>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg  w-[90%]">
            <p className="text-sm font-medium mb-4  whitespace-normal">
              {withdrawType === "instant"
                ? "Sure you want to withdraw?\n5% deduction, no profit"
                : "Sure you want to withdraw?\nFull amount in a month, no profit."}
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={confirmWithdraw}
                className="bg-primary text-black px-4 py-1 rounded-full w-24"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-1 rounded-full w-24"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Withdraw;