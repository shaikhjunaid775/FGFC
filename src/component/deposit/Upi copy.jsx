import { useState } from "react";
import { motion } from "framer-motion";

import { ChevronLeft, History } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

const Upi = ({ goBack, amount }) => {
  const [transactionHash, setTransactionHash] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [address] = useState("2MxdyKzqM3442GWD8ZtmCMBDugr...");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("TDCp7KWGIHqN4nWwkFUdphjHUMTH3Lrvt");
    // In a real app, you might want to show a toast notification here
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
          <Link to="/deposithistory" className="flex justify-end">
            <History />
          </Link>
        </div>
        <div className="max-w-md mx-3">
          {/* Top section with currency and network */}
          <div className="bg-amber-50 border border-yellow-300 rounded-lg p-4 my-3">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-700 mb-1">Deposit currency</p>
                <div className="flex items-center bg-white p-2 rounded">
                  <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="font-medium">USDT</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1">Network</p>
                <div className="bg-white p-2 rounded">
                  <span className="font-medium">TRC 20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main deposit form */}
          <div className="bg-amber-50 border border-yellow-300  rounded-lg p-4 ">
            <div className="flex justify-center">
              <QRCodeSVG
                value={address}
                size={200}
                level="H"
                className="rounded-lg"
              />
            </div>

            <p className="text-sm text-gray-700 my-1">Deposit Address</p>
            <div className="mb-4 ">
              <div className="bg-white border border-yellow-300 rounded-full p-2 flex items-center gap-3 px-4">
                <span
                  className="truncate max-w-[95%] text-sm"
                  title="TDCp7KWGIHqN4nWwkFUdphjHUMTH3Lrvt"
                >
                  TDCp7KWGIHqN4nWwkFUdphjHUMTH3Lrvt
                </span>
                <svg
                  onClick={handleCopyAddress}
                  className="w-6 cursor-pointer ml-1 stroke-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="9"
                    y="9"
                    width="13"
                    height="13"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm">
                You have to pay :{" "}
                <span className="text-xl font-bold">${amount}</span>
              </p>
              <p className="text-sm">
                Amount of Deposit (₹) :{" "}
                <span className="text-xl font-bold">{amount}</span>
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-1">Transaction Hash</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                placeholder="Enter Transaction Hash"
                value={transactionHash}
                onChange={(e) => setTransactionHash(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-1">
                Upload Payment Screenshot
              </p>
              <div className="flex bg-gray-200 rounded-full overflow-hidden">
                <label className="bg-gray-300 px-4 py-2 cursor-pointer">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <div className="px-4 py-2 text-gray-500">{fileName}</div>
              </div>
            </div>

            <button className="w-full bg-primary text-black py-2 rounded-full font-medium  transition duration-200">
              Submit
            </button>
          </div>

          <div className="mt-4 text-yellow-600 font-medium">
            Steps for USDT Deposit:
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Upi;
