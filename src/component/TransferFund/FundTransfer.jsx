import { motion } from "framer-motion";
import { useState } from "react";

function FundTransfer() {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const availableBalance = "45000000.00";

  const handleTransfer = () => {
    // Handle transfer logic
    console.log("Transfer initiated", { username, amount, note });
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto overflow-hidden bg-white/95 backdrop-blur-sm border border-neutral-200/50 shadow-lg rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-3 space-y-6"
        >
          <div className="space-y-4">
            <div className="flex flex-col gap-0.5">
              <label className="text-sm font-medium text-neutral-700">
                Enter Username to Transfer Fund
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-200/80 focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="text-sm font-medium text-neutral-700">
                Enter Amount to Transfer Fund
              </label>
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-200/80 focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
              <p className="text-sm text-neutral-500 mt-1">
                Available Balance: {availableBalance}
              </p>
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="text-sm font-medium text-neutral-700">
                Note (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter Description"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-200/80 focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={handleTransfer}
              className="px-6 py-2.5 w-full  text-sm font-medium text-black bg-gradient-to-tr from-primary to-secondary   rounded-full   text-center   flex gap-2  justify-center shadow-md cursor-pointer"
            >
              Transfer
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default FundTransfer;
