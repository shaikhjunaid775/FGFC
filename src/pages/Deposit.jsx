import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Usdt from "../component/deposit/Usdt";

import {
  ChevronRight,
  Earth,
  CreditCard,
  Landmark,
} from "lucide-react";
import Footer from "../component/Footer";
import KycPrompt from "../component/KycPrompt";
import AddBankPrompt from "../component/AddBankPrompt";
import Bank from "../component/deposit/Bank";
import Upi from "../component/deposit/Upi";

const Deposit = () => {
  const [depositMode, setDepositMode] = useState(null); // 'usdt', 'upi', 'bank' or null

  return (
    <div className="relative overflow-hidden h-screen">
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
            <div className="p-3 text-center">
              <span className="font-semibold text-lg">Deposit Mode</span>
            </div>

            <div className="flex flex-col gap-2">

            <KycPrompt />
            <AddBankPrompt />
            </div>

            {/* Deposit Options */}
            <div className="bg-white mx-5 rounded-xl mt-3">
              {/* USDT Deposit */}
              <div
                className="flex justify-between p-3 text-center cursor-pointer"
                onClick={() => setDepositMode("usdt")}
              >
                <div className="flex gap-3 items-center">
                  <Earth className="w-5" />
                  <span className="font-semibold text-md">
                    Deposit with Network
                  </span>
                </div>
                <ChevronRight />
              </div>

              {/* UPI Deposit */}
              <div
                className="flex justify-between p-3 text-center cursor-pointer border-t"
                onClick={() => setDepositMode("upi")}
              >
                <div className="flex gap-3 items-center">
                  <CreditCard className="w-5" />
                  <span className="font-semibold text-md">
                    Deposit with UPI
                  </span>
                </div>
                <ChevronRight />
              </div>

              {/* Bank Deposit */}
              <div
                className="flex justify-between p-3 text-center cursor-pointer border-t"
                onClick={() => setDepositMode("bank")}
              >
                <div className="flex gap-3 items-center">
                  <Landmark className="w-5" />
                  <span className="font-semibold text-md">
                    Deposit with Bank
                  </span>
                </div>
                <ChevronRight />
              </div>
            </div>
          </motion.div>
        ) : depositMode === "usdt" ? (
          <Usdt goBack={() => setDepositMode(null)} key="usdt" />
        ) : depositMode === "upi" ? (
          <Upi goBack={() => setDepositMode(null)} key="upi" />
        ) : (
          <Bank goBack={() => setDepositMode(null)} key="bank" />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Deposit;
