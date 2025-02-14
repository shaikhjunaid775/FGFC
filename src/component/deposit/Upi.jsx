import { useState } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

import {
  Copy,
  ChevronLeft,
  History
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const Upi = ({ goBack }) => {
  const [address] = useState("acdtewd...");
  const [amount, setAmount] = useState(""); // State to store input value

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      toast.success("Address copied to clipboard", {
        duration: 10000,
        style: { background: "#333", color: "#fff" }
      });
    } catch (err) {
      err.toast.error("Failed to copy address", {
        duration: 2000,
        style: { background: "#333", color: "#fff" }
      });
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="bg-white h-screen flex flex-col"
      >
        {/* Header (Fixed) */}
        <div className="flex justify-between p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <button onClick={goBack}>
            <ChevronLeft />
          </button>
          <span className="font-semibold text-lg whitespace-nowrap">
            Deposit with UPI
          </span>
          <div className="flex justify-end">
            <History />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-3 pb-20">
          <div className="max-w-md mx-auto flex flex-col justify-around gap-3">
            <div className="flex justify-center p-4 bg-white rounded-xl">
              <div className="p-3 bg-white rounded-xl shadow-sm transition-transform hover:scale-[1.02]">
                <QRCodeSVG
                  value={address}
                  size={200}
                  level="H"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              {/* Amount Input */}
              <div className="">
                <label className="text-base text-gray-500 font-semibold block mb-0">
                  Amount
                </label>
                <div className="flex items-center justify-between  pb-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-1 px-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Deposit Address */}
              <div className="">
                <label className="text-base text-gray-500 font-semibold block mb-0">
                  Deposit Address
                </label>
                <div className="flex items-center px-2 space-x-2 border border-b-2 border-primary  rounded-full">
                  <input
                    type="text"
                    value={address}
                    readOnly
                    className="flex-1 text-sm font-mono outline-none"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Copy size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Upload File */}
              <div className="space-y-2">
                <label className="text-base text-gray-500 font-semibold block mb-0">
                  Upload File
                </label>
                <input
                  type="file"
                  className="w-full text-gray-400 font-semibold text-sm bg-white border border-primary file:cursor-pointer cursor-pointer file:border-0 file:py-1.5 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded-full mb-0"
                />
                <p className="text-xs text-gray-400">
                  PNG, JPG, SVG, WEBP, and GIF are allowed.
                </p>
              </div>

              {/* Transaction Hash */}
              <div className="space-y-2">
                <label className="text-base text-gray-500 font-semibold block mb-0">
                  Bank/UTR Number
                </label>
                <div className="flex items-center justify-between  pb-2">
                  <input
                    type="text"
                    className="w-full p-1 px-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Enter Bank/UTR Number"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="space-y-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 w-full  text-sm font-medium text-black bg-gradient-to-tr from-primary to-secondary rounded-full   text-center   flex gap-2  justify-center shadow-md cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};



export default Upi