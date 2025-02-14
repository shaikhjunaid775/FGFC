import { useState } from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const MyPortfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, label: "1st-10th Slab" },
    { id: 2, label: "11th-20th Slab" },
    { id: 3, label: "21st-30/31st Slab" }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tab Container */}
      <div className="relative mb-4">
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
            className="absolute -left-0 top-1 h-[calc(100%-8px)] rounded-full bg-yellow-100 z-0"
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

      {activeTab === 1 && (
        <>
          <div className="bg-[#FFFCF2]  mb-3 rounded-2xl px-2.5 pb-3 relative border border-primary">
            <span className="inline-flex items-center bg-[#B4FFEB] ring-1 ring-[#45c455] text-[#00926C] text-[9px] font-medium ms-2 px-2 py-0.5 rounded-full absolute -top-2.5">
              <span className="animate-pulse w-1.5 h-1.5 me-1 bg-[#00AC7F] rounded-full"></span>
              Active
            </span>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-end">
                  <span className="text-[8px] text-dark">
                    Deposit Date: 2024-12-10 20:59:02{" "}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-white border border-primary p-1.5 rounded-xl">
                    <h4 className="text-xs font-medium">Investment Amount</h4>
                    <p className="text-xl font-bold text-black leading-tight">
                      800000.00
                    </p>
                  </div>
                  <div className="flex justify-between bg-[#EAFFF9] p-1.5 rounded-xl border border-[#00AC7F]">
                    <div>
                      <h4 className="text-xs font-medium">Profit</h4>
                      <p className="text-xl font-bold text-black leading-tight">
                        40000.00
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#00AC7F] text-sm font-bold">
                        PNL 5%{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-3">
                <div className="flex justify-center">
                  <span className="text-black text-sm">
                    Time remaining for Profit
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="text-xl font-black text-[#CC0000]">
                    20 Jan 2025 Unlock🔓{" "}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-8 hidden">
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <button
                    type="button"
                    className="px-1 py-2.5 text-[10px] font-medium text-gray-900 bg-[#ffcc00] rounded-full text-center flex gap-2 justify-center d-none"
                  >
                    <span>Withdraw Principal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {activeTab === 2 && (
        <>
          {/* Dynamic Content based on Active Tab */}
          <div className="overflow-hidden rounded-2xl border border-yellow-200 bg-white p-6">
            {/* Dynamic Content */}
            <div className="mb-2 text-xs text-gray-500">
              Deposit Date: 2024-12-10 20:59:02
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4">
                <div className="mb-1 text-sm text-gray-600">
                  Investment Amount
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  800000.00
                </div>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="mb-1 text-sm text-gray-600">Profit</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    40000.00
                  </span>
                  <span className="text-sm font-medium text-emerald-600">
                    5%
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-1 text-sm text-gray-600">
                Time remaining for Profit
              </div>
              <div className="flex items-center justify-center gap-2 text-xl font-bold text-red-600">
                20 Jan 2025 Unlock
                <Lock className="h-5 w-5" />
              </div>
            </div>
          </div>
        </>
      )}
      {activeTab === 3 && (
        <>
          {/* Dynamic Content based on Active Tab */}
          <div className="overflow-hidden rounded-2xl border border-yellow-200 bg-white p-6">
            {/* Dynamic Content */}
            <div className="mb-2 text-xs text-gray-500">
              Deposit Date: 2024-12-10 20:59:02
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4">
                <div className="mb-1 text-sm text-gray-600">
                  Investment Amount
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  800000.00
                </div>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="mb-1 text-sm text-gray-600">Profit</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    40000.00
                  </span>
                  <span className="text-sm font-medium text-emerald-600">
                    5%
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-1 text-sm text-gray-600">
                Time remaining for Profit
              </div>
              <div className="flex items-center justify-center gap-2 text-xl font-bold text-red-600">
                20 Jan 2025 Unlock
                <Lock className="h-5 w-5" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyPortfolio;
