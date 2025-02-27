import { Eye, ChevronLeft, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import Footer from "../component/Footer";
import Withdraw from "../component/withdrawal/Withdraw";
import WithdrawHistory from "../component/withdrawal/WithdrawHistory";

function Withdrawal() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 1, label: "Withdraw", content: <Withdraw /> },
    { id: 2, label: "Withdraw History", content: <WithdrawHistory /> }
  ];
  return (
    <>
      <div className="bg-white h-screen flex flex-col">
        {/* Header (Fixed) */}
        <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <button>
            <ChevronLeft />
          </button>
          <span className="font-semibold text-lg whitespace-nowrap">
            Withdrawal
          </span>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto ">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center  rounded-[20px]   p-0.5 px-2 mx-3 mt-2   bg-secondary/60 shadow-inner">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                whileHover={{}}
                whileTap={{ x: 80 }}
                exit={{ x: 0 }}
                className={`flex-1 flex gap-1 items-center justify-center text-sm font-medium h-8 px-3 text-center rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring ring-indigo-300 transition-colors duration-150 ease-in-out    ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "text-black/60 hover:text-slate-50"
                }`}
              >
                {tab.label}
                {tab.button}
              </motion.button>
            ))}
          </div>
          <div className="pb-16">
            <div className="px-3 h-auto overflow-visible   max-w-md    rounded-3xl mx-auto my-3 mb-3  whitespace-nowrap ">
              {/* Animated Tab Content */}
              <div className="">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        {tab.content}
                      </motion.div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Withdrawal;
