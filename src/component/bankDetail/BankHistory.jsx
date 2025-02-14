import { useState } from "react";
import { motion } from "framer-motion";

function BankHistory() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, label: "Bank" },
    { id: 2, label: "USDT/BEP20" }
  ];
  return (
    <>
      <div className="relative">
        <div className="flex  bg-white ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 flex-1 px-2  py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id ? "text-black" : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
          {/* Animated Background */}
          <motion.div
            className="absolute -left-0 top-1 h-[calc(100%-8px)] rounded-full bg-gradient-to-br from-secondary from-15% via-primary to-secondary  z-0"
            style={{
              width: `${100 / tabs.length}%`
            }}
            animate={{
              x: `${(activeTab - 1) * 100}%`
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        </div>
      </div>
      <div>{activeTab === 1 ? <span>Bank</span> : <span>USDT</span>}</div>
    </>
  );
}

export default BankHistory;
