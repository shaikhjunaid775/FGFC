import { Eye, ChevronLeft, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ActivateID from "../component/Topup/ActivateID";
import ActivationHistory from "../component/Topup/ActivationHistory";
import Footer from "../component/Footer";

function Topup() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 1, label: "Activate/Top-up", content: <ActivateID /> },
    { id: 2, label: "Activation History", content: <ActivationHistory /> }
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
          Activate/Topup ID
          </span>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto ">
          <div className=" flex flex-col justify-around gap-3 m-3 relative overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute z-0 -top-30 -left-10 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
            <div className="absolute z-0 top-10 -right-10 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
            <div className="p-4 space-y-3 w-full rounded-2xl  shadow-lg relative z-10">
              <div className="space-y-1">
                <p className="text-sm text-gray-800">Total Available</p>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">$32,521.00</h2>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1 flex items-center justify-center gap-1 bg-gradient-to-r to-secondary from-primary  text-black px-6 rounded-full">
                  <div className="bg-white h-3.5 w-3.5 rounded-full p-0.5 flex justify-center items-center">
                    <Plus className="w-3" />
                  </div>
                  <span className="text-sm font-medium">Deposit</span>
                </div>
              </div>
            </div>
          </div>

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

export default Topup;
