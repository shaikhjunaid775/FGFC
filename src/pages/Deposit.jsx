import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Share2, ChevronLeft, ChevronRight, Earth } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

const Usdt = ({ goBack }) => {
  const [address] = useState("2MxdyKzqM3442GWD8ZtmCMBDugr...");
  const [network] = useState("Ethereum (ERC20)");

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
        className="absolute inset-0 bg-white"
      >
        <div>
          <div className="grid grid-cols-3 p-3 text-center">
            <button onClick={goBack}>
              <ChevronLeft />
            </button>
            <span className="font-semibold text-lg">Deposit</span>
          </div>
        </div>
        <div className="h-[90vh] max-w-md mx-auto p-3 flex flex-col justify-around">
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
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-500">Network</label>
              <div className="flex items-center justify-between border-b-1 border-gray-300 ">
                <span className="text-sm text-gray-700">{network}</span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-500">Deposit Address</label>
              <div className="flex items-center px-2 space-x-2 border border-b-2 mt-2 rounded-lg">
                <input
                  type="text"
                  value={address}
                  readOnly
                  className="flex-1 text-sm font-mono outline-none"
                />
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Copy size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-sm text-gray-500">Minimum deposit</label>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  0.00000000
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Expected arrival
                </label>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  12 network confirmations
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Save as Image
            </button>
            <button className="px-4 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              Share Address
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Deposit = () => {
  const [showUsdt, setShowUsdt] = useState(false);

  return (
    <div className="relative overflow-hidden h-screen">
      <AnimatePresence mode="wait">
        {!showUsdt ? (
          <motion.div
            key="deposit"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.1 }}
            className="absolute inset-0 "
          >
            <div className="p-3 text-center">
              <span className="font-semibold text-lg">Deposit Mode</span>
            </div>

            <div className="bg-white mx-5 rounded-xl mt-5">
              <div
                className="flex justify-between p-3 text-center cursor-pointer"
                onClick={() => setShowUsdt(true)}
              >
                <div className="flex gap-3 items-center">
                  <Earth />
                  <span className="font-semibold text-lg">
                    Deposit with Network
                  </span>
                </div>
                <ChevronRight />
              </div>
            </div>

            <Footer />
          </motion.div>
        ) : (
          <Usdt goBack={() => setShowUsdt(false)} key="usdt" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Deposit;
