import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Usdt from "../component/deposit/Usdt";
import Footer from "../component/Footer";
import KycPrompt from "../component/KycPrompt";
import AddBankPrompt from "../component/AddBankPrompt";
import Bank from "../component/deposit/Bank";
import Upi from "../component/deposit/Upi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Deposit = () => {
  const navigate = useNavigate();
  const [depositMode, setDepositMode] = useState(null);
  const [activeTab, setActiveTab] = useState("usdt");
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false); // State for modal

  const handleTabChange = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  const handleConfirm = () => {
    if (!amount || amount === "") {
      toast.error("Please enter an amount.");
      return;
    }

    const numericAmount = Number(amount);
    if (numericAmount < 100000) {
      toast.error("Minimum deposit amount is ₹100,000");
      return;
    }

    setShowModal(true); // Show confirmation modal
  };

  const handleModalConfirm = () => {
    setDepositMode(activeTab); // Set deposit mode on confirmation
    setShowModal(false);
  };

  const tabs = [
    { id: "usdt", label: "USDT" },
    { id: "upi", label: "UPI" },
    { id: "bank", label: "Bank" }
  ];

  return (
    <>
      <Toaster />
      <div className="relative overflow-hidden h-screen ">
        <AnimatePresence mode="wait">
          {!depositMode ? (
            <motion.div
              key="deposit"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.1 }}
              className="absolute inset-0"
            >
              {/* Header (Fixed) */}
              <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
                <button onClick={() => navigate(-1)}>
                  <ChevronLeft  />
                </button>
                <span className="font-semibold text-md whitespace-nowrap">
                  Deposit Mode
                </span>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <KycPrompt />
                <AddBankPrompt />
              </div>

              {/* Deposit Options */}
              <div className="max-w-md bg-[#fdf8ea] p-6 rounded-2xl shadow-md m-5 border border-gray-300">
                <div className="flex mb-6">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ x: activeTab === tab.id ? 10 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className={`flex-1 flex gap-1 items-center justify-center text-sm font-medium h-8 px-4 text-center rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring ring-indigo-300 transition-colors duration-300 ease-in-out ${
                        activeTab === tab.id
                          ? "bg-primary text-black shadow-lg"
                          : "text-black/60 hover:text-slate-50"
                      }`}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                <div className="mb-4 ">
                  <label
                    htmlFor="depositAmount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Deposit Amount
                  </label>
                  <div className="relative">
                    <div className="absolute top-2 start-0 flex items-center ps-3.5 pointer-events-none text-gray-500 font-semibold">
                      {activeTab === "usdt" ? "$" : "₹"}
                    </div>
                    <input
                      type="number"
                      id="depositAmount"
                      className="w-full px-4 py-2 pl-7 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder={`Enter deposit amount in ${
                        activeTab === "usdt" ? "($)" : "(₹)"
                      }`}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  className="w-full bg-yellow-400 text-black py-2 rounded-full font-medium hover:bg-yellow-500 transition duration-200"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          ) : depositMode === "usdt" ? (
            <Usdt
              goBack={() => setDepositMode(null)}
              amount={amount}
              activeTab={activeTab}
              key="usdt"
            />
          ) : depositMode === "upi" ? (
            <Upi
              goBack={() => setDepositMode(null)}
              amount={amount}
              activeTab={activeTab}
              key="upi"
            />
          ) : (
            <Bank
              goBack={() => setDepositMode(null)}
              amount={amount}
              activeTab={activeTab}
              key="bank"
            />
          )}
        </AnimatePresence>
        <Footer />
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <h2 className="text-lg font-semibold mb-3">Confirm Deposit</h2>
              <p className="text-gray-700 mb-4">
                Do you want to proceed with the deposit of{" "}
                <span className="font-semibold">
                  {activeTab === "usdt" ? `$${amount}` : `₹${amount}`}
                </span>
                ?
              </p>
              <div className="flex justify-between gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 w-full"
                >
                  No
                </button>
                <button
                  onClick={handleModalConfirm}
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 w-full"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Deposit;
