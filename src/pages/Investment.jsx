import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { AlertTriangle, X, ChevronLeft } from "lucide-react";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

const Investment = () => {
  const navigate = useNavigate();
  const [walletBalance, setWalletBalance] = useState(150000);
  const [depositAmount, setDepositAmount] = useState(100000);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [addDepositAmount, setAddDepositAmount] = useState("");

  const [isSufficient, setIsSufficient] = useState(true);

  const monthlyProfitRate = 0.05; // 5%
  const yearlyProfitRate = 0.6; // 60%

  const monthlyProfit = depositAmount * monthlyProfitRate;
  const yearlyProfit = depositAmount * yearlyProfitRate;
  const afterOneMonth = depositAmount + monthlyProfit;

  // Check if balance is insufficient when deposit amount changes
  useEffect(() => {
    if (depositAmount > walletBalance) {
      setShowModal(true);
      setIsSufficient(false);
    }
    if (depositAmount < walletBalance) {
      setShowModal(false);
      setIsSufficient(true);
    }
  }, [depositAmount, walletBalance]);

  const handleDepositChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setDepositAmount(value);
  };

  const handleSliderChange = (e) => {
    setDepositAmount(parseInt(e.target.value));
  };

  const handleAddDeposit = () => {
    const amount = parseFloat(addDepositAmount) || 0;
    setWalletBalance(walletBalance + amount);
    setShowModal(false);
    setShowSuccessModal(true);
    setAddDepositAmount("");

    // Auto-close success modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const x = useMotionValue(0);
  const width = useTransform(x, [0, 300 - 60], [300, 60]);
  const opacity = useTransform(x, [0, 300 - 60], [1, 0]);
  const rotate = useTransform(x, [0, 300 - 60], [-90, 0]);
  const dashOffset = useTransform(x, [0, 300 - 60], [192, 202]);
  const offsetX = useTransform(x, [0, 300 - 60], [0, -3]);
  const offsetY = useTransform(x, [0, 300 - 60], [0, 3]);

  // Handle swipe completion
  const handleDragEnd = (event, info) => {
    if (info.offset.x >= 240) {
      console.log("Swipe completed with deposit amount:", depositAmount);
      // Here you would navigate to dashboard or process the investment
    }
  };

  return (
    <>
      <style>
        {`
         .slider {
            border: 1px solid rgb(255 173 16 / 37%);
            background: rgb(254 252 232 / 21%);
        }
        `}
      </style>
      {/* Header (Fixed) */}
      <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
        <span className="font-semibold text-md whitespace-nowrap">
          Start Investment
        </span>
      </div>
      <div className="bg-gray-100 p-3 max-w-md mx-auto rounded-lg pb-20">
        {/* Wallet Balance Section */}
        <div className="bg-gradient-to-r from-primary  to-secondary  p-2 rounded-lg flex justify-between items-center mb-2">
          <div>
            <div className="text-sm">FGFC Wallet Balance</div>
            <div className="text-xl font-bold">
              ₹ {walletBalance.toFixed(2)}
            </div>
          </div>
          <button
            className="bg-white px-3 py-1 rounded-full text-xs"
            onClick={() => setShowModal(true)}
          >
            Add Deposit
          </button>
        </div>

        {/* Deposit Package Selection */}
        <h2 className="text-lg font-semibold mb-2">Select Deposit Package</h2>
        <div className="bg-yellow-50 p-3 px-4 rounded-t-lg ">
          <div className="">
            <div className="mb-1">Select Deposit Amount</div>
            <div className="">
              <input
                type="range"
                min="0"
                max="1000000"
                value={depositAmount}
                onChange={handleSliderChange}
                className="w-full h-1 bg-gradient-to-r from-gray-200 to-green-500 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm mt-1">
                <span>100000.00</span>
                <span>0.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 p-2 rounded-b-lg">
          <div className="mb-2 text-sm">Enter Amount to Deposit in (₹)</div>
          <input
            type="text"
            value={depositAmount}
            onChange={handleDepositChange}
            className="w-full p-2 rounded border-none text-lg bg-white font-semibold"
          />
        </div>

        {/* Profit Tariff */}
        <h2 className="text-lg font-semibold my-2">Profit Tariff</h2>
        <table className="w-full border-2 border-secondary/60 rounded-lg overflow-hidden border-separate border-spacing-0 mb-2">
          <tbody>
            <tr className=" ">
              <td className="p-1 px-2 border border-primary/50 text-xs">
                Deposit Amount
              </td>
              <td className="p-1 px-2 border border-primary/50 text-right text-xs font-semibold">
                {depositAmount.toLocaleString()}
              </td>
            </tr>
            <tr className="">
              <td className="p-1 px-2 border border-primary/50 text-xs">
                Total Monthly Profit (5%)
              </td>
              <td className="p-1 px-2 border border-primary/50 text-right text-xs font-semibold">
                {monthlyProfit.toFixed(2)}
              </td>
            </tr>
            <tr className="">
              <td className="p-1 px-2 border border-primary/50 text-xs">
                Total Yearly Profit (60%)
              </td>
              <td className="p-1 px-2 border border-primary/50 text-right text-xs font-semibold">
                {yearlyProfit.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Deposit & Profit Summary */}
        <h2 className="text-lg font-semibold mb-2">Deposit & Profit Summary</h2>
        <div className="flex space-x-2 mb-2">
          <div className="flex-1 bg-gradient-to-r from-primary  to-secondary  p-2 rounded-lg text-center">
            <div className="text-[9px] mb-1">Total Monthly Profit</div>
            <div className="text-lg font-bold">
              <sup className="text-gray-400">₹</sup>
              {monthlyProfit.toFixed(2)}
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-2 rounded-lg text-center border border-gray-300">
            <div className="text-[9px] mb-1">Total Deposit Amount</div>
            <div className="text-lg font-bold">
              <sup className="text-gray-400">₹</sup>
              {depositAmount.toLocaleString()}
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-2 rounded-lg text-center border border-gray-300">
            <div className="text-[9px] mb-1">After One Month</div>
            <div className="text-lg font-bold">
              <sup className="text-gray-400">₹</sup>
              {afterOneMonth.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="text-[9px] text-gray-600">
          Caution: The profit and loss estimates displayed are hypothetical and
          based on current market conditions. Actual results may vary based on
          real-time market fluctuations. Exercise caution and trade responsibly.
        </div>

        {/* Swipe Button - Only shown when balance is sufficient */}
        {isSufficient && (
          <div className="flex justify-center mt-6">
            <div className="swipercontainer">
              <motion.div
                className="thumb"
                drag="x"
                dragConstraints={{ left: 0, right: 300 - 60 }}
                dragSnapToOrigin
                dragElastic={0.01}
                style={{ x }}
                onDragEnd={handleDragEnd} // Attach the drag end handler
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  style={{
                    rotate,
                    position: "relative",
                    top: offsetY,
                    left: offsetX
                  }}
                >
                  <motion.path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    strokeDasharray={100}
                    strokeDashoffset={dashOffset}
                    d="M23 4L17.5 9.5L12 15L7 10"
                  />
                </motion.svg>
              </motion.div>

              <motion.div className="slider" style={{ width }}>
                <motion.div
                  className="slider-text text-black"
                  style={{ opacity }}
                >
                  Swipe to dashboard
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
        {/* Insufficient Balance Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Add Deposit</h3>
                <button onClick={closeModal} className="text-gray-500">
                  <X size={20} />
                </button>
              </div>

              {depositAmount > walletBalance && (
                <div className="bg-red-100 p-3 rounded-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-red-500" size={20} />
                  <div className="text-sm">
                    Your wallet balance (₹{walletBalance.toFixed(2)}) is less
                    than your selected deposit amount (₹
                    {depositAmount.toLocaleString()}).
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block mb-2 text-sm">
                  Enter amount to add (₹)
                </label>
                <input
                  type="text"
                  value={addDepositAmount}
                  onChange={(e) => setAddDepositAmount(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter amount"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="mr-2 px-4 py-2 border border-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddDeposit}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Add Deposit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Deposit Successful</h3>
                <p className="text-gray-600 mb-4">
                  Your deposit has been added to your wallet successfully.
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Investment;
